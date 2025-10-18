// import logosvg from './img/logo-header.svg'; // * component
import logosvg from '/img/logo-header.svg'; // * public
import s from './Logo.module.scss';
import { SITE_TITLE } from '../../const';

// todo no link at Main Page '/'
export const Logo = (props) => (
  
  <div className={s.logo}>
    <img
      className={s.img}
      src={logosvg}
      alt={'Логотип мебельного маркета ' + SITE_TITLE}
      title={'Главная страница мебельного маркета ' + SITE_TITLE}
      />
    <h1 className="title">
      {`Главная страница мебельного маркета ${SITE_TITLE}`}
    </h1>
  </div>
  
);
