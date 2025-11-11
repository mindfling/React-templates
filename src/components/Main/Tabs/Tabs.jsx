// import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId'

// список меню
const tabsList = [
  {
    value: 'Главная',
    href: '#',
    slug: 'home',
  },
  {
    value: 'Просмотренные',
    href: '#',
    slug: 'visited',
  },
  {
    value: 'Сохраненные',
    href: '#',
    slug: 'saved',
  },
  {
    value: 'Мои посты',
    href: '#',
    slug: 'myposts',
  },
].map(assignId);
console.log('tabsList: ', tabsList);

export const Tabs = () => {

  return (
    <>
      <ul className={style.list}>
        {tabsList.map((tab) => (
          <li className={style.item} key={tab.id}>
            <a
              className={style.link}
              href={`#${tab.slug}`}
              title={`Перейти на страницу ${tab.value} нашего блога ${tab.id}`}
            >
              {tab.value}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

// props validation
Tabs.propTypes = {
  tabs: PropTypes.array,
};
