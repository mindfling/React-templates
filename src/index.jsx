import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import chalk from 'chalk';
import 'normalize.css';
import './index.css';

// * DEBUG
const textColor = 'green';
console.log(chalk[textColor](`${textColor} main jsx`));

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
