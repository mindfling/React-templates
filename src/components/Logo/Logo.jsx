// import logosvg from './img/logo-header.svg'; // * component
import logosvg from '/img/logo-header.svg'; // * public
import s from './Logo.module.scss';
import { SITE_TITLE } from '../../const';

// todo no link at Main Page '/'
export const Logo = (props) => (
  
  <div className={s.logo}>
    <img className={s.img} src={logosvg} />
    <h1 className="title">{SITE_TITLE}</h1>
  </div>
  
);
