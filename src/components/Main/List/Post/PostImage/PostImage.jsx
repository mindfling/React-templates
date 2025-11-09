import style from './PostImage.module.css';
import PropTypes from 'prop-types';


export const PostImage = ({photo}) => {
  console.log('Functional PostImage loaded');
  return (
    <>
      <div className={style.postimage}>
        <img className={style.img} src={photo} alt='not photo placeholder' />
      </div>
    </>
  );
};


// todo props validation
PostImage.propTypes = {
  photo: PropTypes.string,
};
