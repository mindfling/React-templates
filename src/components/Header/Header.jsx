import style from './Header.module.css';
import Layout from '../Layout';
import Headling from './Headling';
import Search from './Search';
import Auth from './Auth';
// import Logo from './LogoImage';
// import Logo from './LogoInline';
import Logo from './LogoSvg';


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
