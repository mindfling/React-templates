import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';
import { useState } from 'react';


// список меню
const LIST = [
  {
    value: 'Главная',
    slug: 'home',
  },
  {
    value: 'Просмотренные',
    slug: 'visited',
  },
  {
    value: 'Сохраненные',
    slug: 'saved',
  },
  {
    value: 'Мои посты',
    slug: 'myposts',
  },
].map(assignId);


export const Main = () => {
  const [list, setList] = useState(LIST);
  console.log('list in Main: ', list);
  return (
    <>
      <main className={style.main}>
        <Layout>
          <Tabs list={list} setList={setList} />
          {/* <List /> */}
        </Layout>
      </main>
    </>
  )
};
