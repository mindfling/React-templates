import classNames from "classnames";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { assignId } from "../../../utils/generateRandomId";
// import { ReactComponent as ArrowIcon } from './img/arrow.svg'; // icon for CRA
import Arrow from './img/arrow.svg?react'; // icon for Vite5
import Home from './img/home.svg?react';
import Eye from './img/eye.svg?react';
import Save from './img/save.svg?react';
import Post from './img/post.svg?react';

// список меню
const LIST = [
  { value: 'Главная', Icon: Home},
  { value: 'Просмотренные', Icon: Eye},
  { value: 'Сохраненные', Icon: Save},
  { value: 'Мои посты', Icon: Post},
].map(assignId);


export const Tabs = () => {
  const [list, setList] = useState(LIST);
  console.log("list in Main: ", list);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (id) => {
    console.log(`Click on id ${id}`);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>Open menu</span>
            <Arrow width={15} height={15} />
          </button>
        </div>

        {/* меню открыто если Открыто */}
        {isDropdownOpen && (
          <ul
            className={style.list}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {list.map(({value, id, Icon}) => (
              <li className={style.item} key={id}>
                <button
                  className={style.btn}
                  onClick={() => handleClick(id)}
                >
                  <span>{value}</span>
                  {Icon && <Icon width={25} height={25} />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
