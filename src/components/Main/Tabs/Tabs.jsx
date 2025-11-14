import classNames from "classnames";
import style from "./Tabs.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { assignId } from "../../../utils/generateRandomId";
// import { ReactComponent as ArrowIcon } from './img/arrow.svg'; // icon for CRA
import Arrow from './img/arrow.svg?react'; // icon for Vite5

import Home from './img/outline/home.svg?react';
import Eye from './img/outline/eye.svg?react';
import Save from './img/outline/save.svg?react';
import Post from './img/outline/post.svg?react';

import HomeIcon from './img/colored/home.svg?react';
import TopIcon from './img/colored/top.svg?react';
import BestIcon from './img/colored/best.svg?react';
import HotIcon from './img/colored/hot.svg?react';

// список меню исходный
const LIST_OLD = [
  { value: 'Главная', Icon: Home},
  { value: 'Просмотренные', Icon: Eye},
  { value: 'Сохраненные', Icon: Save},
  { value: 'Мои посты', Icon: Post},
].map(assignId);
// список меню обновленный
const LIST = [
  { value: 'Главная', Icon: HomeIcon, slug: 'Main home'},
  { value: 'Топ', Icon: TopIcon, slug: 'Top'},
  { value: 'Лучшие', Icon: BestIcon, slug: 'The Best'},
  { value: 'Горячие', Icon: HotIcon, slug: 'Hot tuj'},
].map(assignId);


export const Tabs = () => {
  const [list, setList] = useState(LIST);
  console.log("list in Main: ", list);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    // todo const debounceResize = debounceRaf(handleResize) => { }
    // открываем или закрываем меню от размера экрана
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleClick = (id) => {
    console.log(`Click on id ${id}`);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperBtn}>
          {isDropdown && <button
            className={style.btn}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>Open menu</span>
            <Arrow width={15} height={15} />
          </button>}
        </div>

        {(isDropdownOpen || !isDropdown) && (
          <ul
            className={style.list}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {list.map(({value, id, Icon, slug}) => (
              <li className={style.item} key={id}>
                <button
                  className={style.btn}
                  onClick={() => handleClick(id)}
                  title={slug ? slug : 'Глав'}
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
