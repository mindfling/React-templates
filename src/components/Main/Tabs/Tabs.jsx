/* eslint-disable */
// import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';

// список меню
const tabsList = [
  {
    value: 'Главная',
    href: '#',
    slug: 'home',
    id: 0,
  },
  {
    value: 'Просмотренные',
    href: '#',
    slug: 'visited',
    id: 1,
  },
  {
    value: 'Сохраненные',
    href: '#',
    slug: 'saved',
    id: 2,
  },
  {
    value: 'Мои посты',
    href: '#',
    slug: 'myposts',
    id: 3,
  },
];

export const Tabs = () => {
  console.log('Functional Tabs loaded');
  console.log('tabsList: ', tabsList);

  // todo better key index
  return (
    <>
      <ul className={style.list}>
        {tabsList.map((tab) => (
          <li className={style.item} key={tab.id}>
            <a
              className={style.link}
              href={`#${tab.slug}`}
              title={`Перейти на страницу ${tab.value} нашего блога `}
            >
              {tab.value}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

// // props validation
// Tabs.propTypes = {
//   tabs: PropTypes.array,
// };
