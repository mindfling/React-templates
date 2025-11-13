import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';
import { useState } from 'react';


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
    // todo it can be used in todo!!!
    console.log('add item');
    // setList(list => list.concat(assignId({value: 'New item'}))); // или так
    setList((list) => [...list, assignId(assignId({ value: "New item" }))]); // так или
  }

  return (
    <>
      <main className={style.main}>
        <Layout>
          <button className="addItem" onClick={addItem}>Кнопка добавить todo Item</button>
          <Tabs list={list} setList={setList} />
          {/* <List /> */}
        </Layout>
      </main>
    </>
  )
};
