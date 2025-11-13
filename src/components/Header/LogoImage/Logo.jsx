import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => {
  return (
    <>
      <a
        className={style.link}
        href='/'
      >
        <img
          className={style.image}
          src={logo}
          alt="B logo of Blogger company" />
      </a>
    </>
  );
};
