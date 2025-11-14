// import React from 'react';
import style from './PostDeleteBtn.module.css';
import { ReactSVG } from 'react-svg';
import IconDelete from './delete.svg';

export const PostDeleteBtn = () => {
  console.log(IconDelete);
  console.log('PostDeleteBtn');
  return (
    <>
      <button className={style.delete} aria-label="Удалить текущий пост" title="Удалить пост">
        <ReactSVG svg={IconDelete} />
        {/* <ReactSVG svg="delete.svg" /> */}
      </button>
    </>
  );
};
