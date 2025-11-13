import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';
import { useState } from 'react';

import { generate, count } from "random-words";





export const Main = () => {

  // const addItem = () => {
  //   const word = generate();
  //   setList((list) => [...list, assignId(assignId({ value: `New ${word}` }))]); // todo it can be used in todo!!!
  // }

  return (
    <>
      <main className={style.main}>
        <Layout>
          <Tabs />
          {/* <List /> */}
        </Layout>
      </main>
    </>
  )
};
