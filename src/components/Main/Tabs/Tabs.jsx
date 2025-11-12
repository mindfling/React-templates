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
    slug: 'visited',
    href: '#',
  },
  {
    value: 'Сохраненные',
    slug: 'saved',
    href: '#',
  },
  {
    value: 'Мои посты',
    slug: 'myposts',
    href: '#',
  },
].map(assignId);

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


Tabs.propTypes = {
  tabs: PropTypes.array,
};
