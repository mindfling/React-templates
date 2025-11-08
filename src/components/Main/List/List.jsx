/* eslint-disable */
// import React from 'react';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  console.log('Functional List loaded');
  const postData = {
    thumbnail: '',
    title: 'Title Заголовок',
    author: 'John Doe',
    ups: 124,
    date: '2025-02-24T12:05:00.000Z',
  };

  return (
    <>
      <h2>Список текущих постов</h2>
      <ul className={style.list}>
        <Post postData={postData} />
        <Post postData={postData} />
        <Post postData={postData} />
      </ul>
    </>
  );
};
