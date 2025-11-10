import style from './PostImage.module.css';
import PropTypes from 'prop-types';
import notphoto from "./img/notphoto.jpg";


export const PostImage = ({photo}) => {
  return (
    <>
      {!photo && <img className={style.img} src={notphoto} alt="placeholder not a photo" />}
    </>
  );
};


// todo props validation and image photo notphoto
PostImage.propTypes = {
  photo: PropTypes.string,
};
