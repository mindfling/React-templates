import style from './Layout.module.css';

export const Layout = ({props}) => {
  console.log('Container');
  
  return (
    <>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
