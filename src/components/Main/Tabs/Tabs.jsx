/* eslint-disable */
// import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';


const tabsList = [
  {
    title: 'Главная',
    href: '#',
  },
  {
    title: 'Просмотренные',
    href: '#',
  },
  {
    title: 'Сохраненные',
    href: '#',
  },
  {
    title: 'Мои посты',
    href: '#',
  },
]

export const Tabs = (props) => {
  console.log('Functional Tabs loaded');

  return (
    <>
      <ul className={style.list}>
        {tabsList.map(item => (<>
          <li className={style.item}>
            <a className={style.link} href={item.href} title={`Перейти на страницу ${item.title} нашего блога`}>
              {item.title}
            </a>
          </li>
        </>))}
      </ul>
    </>
  );
};


// props validation
Tabs.propTypes = {
  tabs: PropTypes.array,
};
