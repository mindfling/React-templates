// import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import { PostImage } from './PostImage/PostImage';
import { PostContent } from './PostContent/PostContent';
import { PostRating } from './PostRating/PostRating';
import { PostDeleteBtn } from './PostDeleteBtn/PostDeleteBtn';
import { PostTime } from './PostTime/PostTime';

// * функциональный компонент Post
export const Post = ({ postData }) => {
  const { id, title, text, author, nickname, ups, date } = postData;
  // console.log('{ id, title, text, author, nickname, ups, date }: ',
  //                 { id, title, text, author, nickname, ups, date });

  return (
    <li className={style.postItem}>
      <article className={style.post}>
        <PostImage />
        <PostContent title={title} author={author} />
        <PostRating ups={ups} />
        <PostDeleteBtn />
        <PostTime date={date} />
      </article>
    </li>
  );
};

// props validation
Post.propTypes = {
  postData: PropTypes.object,
};
