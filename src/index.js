import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const element = document.getElementById('root');
console.log('element: ', element);
const root = ReactDOM.createRoot(element);
console.log('root: ', root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
