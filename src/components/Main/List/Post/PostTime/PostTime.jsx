import formatDate from '../../../../../utils/formatDate';
import style from './PostTime.module.css';
import PropTypes from 'prop-types';


export const PostTime = ({date}) => {
  return (
    <>
      <time
        className={style.date + ' ' + style.posttime}
        dateTime={date}
        title={`Дата создания текущего поста ${date}`}
      >
        {formatDate(date)}
      </time>
    </>
  );
};


PostTime.propTypes = {
  date: PropTypes.string,
};
