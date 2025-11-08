/* eslint-disable */
// import React from 'react';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  console.log('Functional List loaded');
  const postData = {
    thumbnail: '',
    title: 'THis Title',
    author: 'John Doe',
    ups: 24,
    date: '2025-02-24T09:00:00.000Z',
  };

  return (
    <>
      <h2>list title</h2>
      <ul className={style.list}>
        <Post postData={postData} />
        <Post postData={postData} />
      </ul>
    </>
  );
};
