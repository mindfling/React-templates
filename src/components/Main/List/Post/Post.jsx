// import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostDeleteBtn from './PostDeleteBtn';
import PostTime from './PostTime';

export const Post = ({ postData }) => {
  const { id, title, text, author, nickname, ups, date } = postData;

  return (
    <li className={style.postItem}>
      <article className={style.post}>
        <PostImage />
        <PostContent title={title} text={text} author={author} />
        <PostRating ups={ups} />
        <PostDeleteBtn />
        <PostTime date={date} />
      </article>
    </li>
  );
};


Post.propTypes = {
  postData: PropTypes.object,
};
