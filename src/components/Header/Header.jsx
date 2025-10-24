import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Logo';
// import LogoSvg from '../LogoSvg';
import Headling from '../Headling';
import Search from '../Search';
import Auth from '../Auth';


export const Header = () => {
  console.log('Header');

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
