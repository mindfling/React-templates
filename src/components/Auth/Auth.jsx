import style from './Auth.module.css';
import loginImg from './img/login.svg';

export const Auth = () => {
  console.log('Auth');
  
  return (
    <>
      <div className={style.auth}>
        <button className={style.button}>
          <img className={style.svg} src={loginImg} alt="Авторизация пользователя Login user picture" />
        </button>
      </div>
    </>
  );
};
