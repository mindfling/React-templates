import { useState } from 'react';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';

export const PostRating = ({ ups }) => {
  const [rating, setRating] = useState(ups);
  // console.log(`Functional PostRating loaded\ncurrent rating is ${rating}`);

  const handleInc = () => {
    setRating((rating) => rating + 1);
  };

  const handleDec = () => {
    if (rating <= 0) {
      return console.log('Рейтин поста уже ниже нижнего');
    }
    setRating((rating) => rating - 1);
  };

  return (
    <>
      <div className={style.rating}>
        <button
          className={style.up}
          aria-label="Увеличить рейтинг поста"
          title="Увеличить рейтинг"
          onClick={handleInc}
        />
        <p className={style.ups} title={`Текущий рейтинг поста ${ups}`}>
          {rating}
        </p>
        <button
          className={style.down}
          aria-label="Уменьшить рейтинг поста"
          title="Уменьшить рейтинг"
          onClick={handleDec}
        />
      </div>
    </>
  );
};

// props validation
PostRating.propTypes = {
  ups: PropTypes.number,
};
