import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { assignId } from '../../utils/generateRandomId';


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
].map(tab => ({ ...tab, href: '#' }))
  .map(assignId);


export const Main = ({ children }) => {
  return (
    <>
      <main className={style.main}>
        <Layout>
          <Tabs list={LIST}/>
          <List />
        </Layout>
      </main>
    </>
  )
};
