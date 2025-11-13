import classNames from "classnames";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const Tabs = ({ list, setList, addItem }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (id) => {
    // del menu item with id
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <button className={classNames("addItem", style.btn)}
        onClick={() => {
          addItem();
          if (count <= 10) {
            setCount(prev => prev + 1);
          } else {
            setIsDropdownOpen(() => true);
          }

          console.log(count);
        }}
      >
        Кнопка добавить todo Item
      </button>

      {isDropdownOpen && <ul className={style.list}>
        {list.map((tab) => (
          <li className={style.item} key={tab.id}>
            <button className={style.btn} onClick={() => handleClick(tab.id)}>
              {tab.value}
            </button>
          </li>
        ))}
      </ul>}
    </>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  tabs: PropTypes.array,
};
