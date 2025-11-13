import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';
import { useState } from 'react';

import { generate, count } from "random-words"; // demo

export const Main = () => {

  return (
    <>
      <main className={style.main}>
        <Layout>
          <Tabs />
          <List />
        </Layout>
      </main>
    </>
  )
};
