import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Logo';
import Headling from '../Headling';
import Search from '../Search';
import Auth from '../Auth';


// todo all children inside Header
export const Header = () => {

  return (
    <>
      <header className={style.header}>
        <Layout>
          <div className={style.gridContainer}>
            <Logo />
            <Headling text='Blogget' />
            <Search />
            <Auth auth={true} />
          </div>
        </Layout>
      </header>
    </>
  );
};
