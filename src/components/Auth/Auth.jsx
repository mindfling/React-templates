import style from './Auth.module.css';
import loginImg from './img/login.svg';

export const Auth = ({ auth }) => {
  console.log('Auth');
  console.log('auth is authoried ', auth);
  
  return (
    <>
      <div className={style.auth}>
        <button className={style.button}>
          {/* todo is the user auth */}
          <img
            className={style.svg}
            src={loginImg} 
            alt="Авторизация пользователя Login user picture" />
        </button>
      </div>
    </>
  );
};
