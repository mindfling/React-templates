import React from "react"
import logo from "/src/img/logo.svg";

const Module = () => {
  return (
    <>
      <h2 className="hallo-title">Привет React</h2>
      <p className="text">Картинка</p>
      <img className="image" src={logo} alt="Logo B example" />
    </>
  )
}


export default Module;
