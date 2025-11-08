/* eslint-disable */
// import React from 'react';
import style from './List.module.css';


export const List = () => {
  console.log('Functional List loaded');

  return (
    <>
      <h2>list title</h2>
      <ul className={style.list}>
        <li className="item">1</li>
        <li className="item">2</li>
      </ul>
    </>
  );
};
