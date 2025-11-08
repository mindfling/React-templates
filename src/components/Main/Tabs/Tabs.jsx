/* eslint-disable */
// import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';


const handle = (e) => {
  const number = Math.random();
  return number;
};

export const Tabs = (props) => {
  console.log('Functional Tabs loaded');
  const count = props.min;

  return (
    <>
      <ul className={style.list}>
        <li><a href="/">Главная</a></li>
        <li><a href="/">Просмотренные</a></li>
        <li><a href="/">Сохраненные</a></li>
        <li><a href="/">Мои посты</a></li>
      </ul>
    </>
  );
};


// props validation
Tabs.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
