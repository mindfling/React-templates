import React from "react";
import { createRoot } from "react-dom/client";
import Module from './Module';
import App from './App';
import './styles/style.scss';

const root = document.querySelector('#root');
const rootElem = createRoot(root);


rootElem.render(
  <>
    <h1 className="title">Render hallo</h1>
    <Module />
    <App />    
  </>
);