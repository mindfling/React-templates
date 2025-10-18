import s from './Navigation.module.scss';
import { Link } from 'react-router-dom';
// для перехода по ссылке внутри приложения без перезагрузки страницы

export const Navigation = ({ className }) => (
  <nav className={className ? `${className} ${s.navigation}` : s.navigation}>
    <Link className={s.link} to="/favorite" title="Перейти в Избранное">
      <span className={s.link_text}>Избранное</span>
    </Link>
  </nav>
);
