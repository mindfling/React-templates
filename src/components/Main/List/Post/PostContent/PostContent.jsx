import style from './PostContent.module.css';
import PropTypes from 'prop-types';


export const PostContent = ({title, author}) => {
  // console.log('Functional PostContent loaded');

  return (
    <>
      <div className={style.content}>
        <h2 className={style.title} title={`Полное название текущего поста ${title}`}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>
        <a className={style.linkAuthor} href={'#author'} title={`Автор текущего поста ${author}`}>{author}</a>
      </div>
    </>
  );
};


// todo props validation
PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
