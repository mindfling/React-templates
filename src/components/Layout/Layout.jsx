// * Layout Container
import style from './Layout.module.css';

export const Layout = props => (
  <>
    <div className={style.container}>
      {props.children}
    </div>
  </>
)
