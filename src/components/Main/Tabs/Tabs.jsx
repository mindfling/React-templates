// import React from 'react';
import classNames from "classnames";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";

export const Tabs = ({ list, setList, addItem }) => {

  const handleClick = (id) => {
    // del menu item with id
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <button className={classNames("addItem", style.btn)} onClick={addItem}>
        Кнопка добавить todo Item
      </button>

      <ul className={style.list}>
        {list.map((tab) => (
          <li className={style.item} key={tab.id}>
            <button className={style.btn} onClick={() => handleClick(tab.id)}>
              {tab.value}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  tabs: PropTypes.array,
};
