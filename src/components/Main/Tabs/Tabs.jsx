// import React from 'react';
import style from "./Tabs.module.css";
import PropTypes from "prop-types";

export const Tabs = ({ list, setList }) => {
  const handleClick = (id) => {
    console.log('id in handleClick: ', id);
    setList(list.filter(item => item.id !== id));
  }
  
  return (
    <ul className={style.list}>
      {list.map((tab) => (
        <li className={style.item} key={tab.id}>
          <button className={style.btn} id={tab.id} onClick={(e) => {
            handleClick(e.target.id)
          }}>
            {tab.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  tabs: PropTypes.array,
};
