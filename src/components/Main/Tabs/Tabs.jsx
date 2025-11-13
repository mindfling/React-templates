// import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId'


export const Tabs = ({ list }) => {
  console.log('list: ', list);

  return (
    <>
      <ul className={style.list}>
        {list.map((tab) => (
          <li className={style.item} key={tab.id}>
            <a
              className={style.link}
              href={`${tab.href}${tab.slug}`}
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
