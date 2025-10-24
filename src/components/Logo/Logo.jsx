import style from './Logo.module.css';
import logo from './logo.svg';

export const Logo = () => {
  console.log('Logo image');
  
  return (
    <>
      <a
        className={style.link}
        href='/'
      >
        <img
          className={style.logo} 
          src={logo} 
          alt="B logo of Blogger company" />
      </a>
    </>
  )
}
