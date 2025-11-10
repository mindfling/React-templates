/* eslint-disable */
import style from './PostRating.module.css';
import PropTypes from 'prop-types';


export const PostRating = ({ups}) => {
  console.log('Functional PostRating loaded');
  return (
    <>
      <div className={style.rating}>
        <button className={style.up} aria-label='Увеличить рейтинг поста' title='Увеличить рейтинг' />
        <p className={style.ups} title={`Текущий рейтинг поста ${ups}`}>{ups}</p>
        <button className={style.down} aria-label='Уменьшить рейтинг поста' title='Уменьшить рейтинг' />
      </div>
    </>
  );
};


// props validation
PostRating.propTypes = {
  ups: PropTypes.string,
};
