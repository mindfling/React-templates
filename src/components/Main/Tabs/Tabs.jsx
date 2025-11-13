import classNames from "classnames";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const Tabs = ({ list, setList, addItem }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (id) => {
    // del menu item with id
    // setList(list.filter(item => item.id !== id));
    console.log(`Click on id ${id}`);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => {
              setIsDropdownOpen(prev => {
                if (!prev) {
                  console.log("Dropdown is Open")
                } else {
                  console.log("Dropdown is Close");
                }
                return !prev;
              });
            }}
          >
            Open menu
          </button>
        </div>

        {isDropdownOpen && <ul className={style.list} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {list.map((tab) => (
            <li className={style.item} key={tab.id}>
              <button className={style.btn} onClick={() => handleClick(tab.id)}>
                {tab.value}
              </button>
            </li>
          ))}
        </ul>}

      </div>
    </>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  tabs: PropTypes.array,
};
