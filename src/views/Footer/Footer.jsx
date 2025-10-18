// * footer
import { Container } from '../Container/Container';
import { Logo } from '../../components/Logo/Logo';
// import { Contacts } from '../../components/Contacts/Contacts';
// import { Developer } from '../../components/Developer/Developer';
// import { Copy } from '../../components/Copy/Copy';
import s from './Footer.module.scss';

export const Footer = () => {
    
  return (
  <footer className={s.footer}>
    <Container className={s.container_footer}>
      <Logo className={s.logo}/>
    </Container >
  </footer>
)}
