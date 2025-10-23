import React from 'react'


const Header = (props) => {
  console.log('in Header props: ', props);
  return (
    <>
      <header>
        <div className="container">
          {props.children}
        </div>
      </header>
    </>
  )
}

export default Header;