import style from './PostImage.module.css';
import PropTypes from 'prop-types';
import notphoto from "./img/notphoto.jpg";


export const PostImage = ({photo}) => {
  // todo photo and nophoto
  return (
    <>
      {!photo && <img className={style.img} src={notphoto} alt="placeholder not a photo" />}
    </>
  );
};


PostImage.propTypes = {
  photo: PropTypes.string,
};
