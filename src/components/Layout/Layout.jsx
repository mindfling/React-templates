// * Layout Container
import style from './Layout.module.css';

export const Layout = ({props}) => {
  console.log('Container', style);
  
  return (
    <>
      <div className={style.container}>
        {props.children}
      </div>
    </>
  )
}
