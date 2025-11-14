import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../../UI/Text';


export const PostContent = ({title, text, author}) => {
  return (
    <>
      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>
        <a className={style.linkAuthor} href={'#author'}>{author}</a>
        <Text As='p' className="text" color="grey33" size={18} tsize={14} dsize={20}>{text}</Text>
      </div>
    </>
  );
};


// todo props validation
PostContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
};
