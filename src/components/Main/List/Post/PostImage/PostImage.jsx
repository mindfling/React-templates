import style from './PostImage.module.css';
import PropTypes from 'prop-types';
import photo from "./img/notphoto.jpg";


export const PostImage = () => {
  console.log('Functional PostImage loaded');
  return (
    <>
      <img className={style.img} src={photo} alt="not photo placeholder" />
    </>
  );
};


// todo props validation
PostImage.propTypes = {
  photo: PropTypes.string,
};
