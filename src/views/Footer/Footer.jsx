// * footer
import { Container } from '../Container/Container';
import { Logo } from '../../components/Logo/Logo';
import s from './Footer.module.scss';
import { SITE_TITLE } from '../../const';

export const Footer = () => {
    
  return (
  <footer className={s.footer}>
    <Container className={s.container_footer}>
      <Logo className={s.logo}/>
      <p className="footer__text">{SITE_TITLE}</p>
    </Container >
  </footer>
)}
