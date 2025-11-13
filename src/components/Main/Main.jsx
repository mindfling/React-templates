import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';
import { useState } from 'react';

import { generate, count } from "random-words";



// список меню
const LIST = [
  { value: 'Главная', },
  { value: 'Просмотренные', },
  { value: 'Сохраненные', },
  { value: 'Мои посты', },
].map(assignId);


export const Main = () => {
  const [list, setList] = useState(LIST);
  console.log('list in Main: ', list);

  const addItem = () => {
    const word = generate();
    setList((list) => [...list, assignId(assignId({ value: `New ${word}` }))]); // todo it can be used in todo!!!
  }

  return (
    <>
      <main className={style.main}>
        <Layout>
          <Tabs list={list} setList={setList} addItem={addItem} />
          {/* <List /> */}
        </Layout>
      </main>
    </>
  )
};
