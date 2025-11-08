/* eslint-disable */
// import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';


export const Post = ({postData}) => {
  console.log('Functional Post loaded');
  const { title, author, ups, date } = postData;

  return (
    <>
      <li className={style.post}>
        <img className={style.img} src={notphoto} alt="photo title" />

        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <p className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est quia fugiat earum ea. Labore laborum facilis eligendi molestiae necessitatibus soluta mollitia. Iure excepturi, eos provident iste repudiandae expedita. Quibusdam!
          </p>
        </div>
      </li>
    </>
  );
};


// props validation
Post.propTypes = {
  postData: PropTypes.object,
};
