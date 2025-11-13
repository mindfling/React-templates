import style from './LogoSvg.module.css';
import Logo from './img/logo.svg?react';


export const LogoSvg = () => {
  return (
    <>
      <a
        className={style.logolink}
        href='/'
      >
        <Logo />
      </a>
    </>
  );
};
