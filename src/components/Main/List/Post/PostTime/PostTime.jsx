import formatDate from '../../../../../utils/formatDate';
import style from './PostTime.module.css';
import PropTypes from 'prop-types';


export const PostTime = ({date}) => {
  console.log('Functional PostTime loaded');

  return (
    <>
      <time
        className={style.date}
        dateTime={date}
        title={`Дата создания текущего поста ${date}`}
      >
        {formatDate(date)}
      </time>
    </>
  );
};


// props validation
PostTime.propTypes = {
  date: PropTypes.string,
};
