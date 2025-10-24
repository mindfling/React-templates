---
to: <%= absPath %>/<%= component_name %>.jsx
---
import style from './<%= component_name %>.module.css';

export const <%= component_name %> = () => {
  
  return (
    <>
      <div className={style.<%= component_name %>}>
        <div className="container">
          
        </div>
      </div>
    </>
  )
}
