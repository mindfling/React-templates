import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import chalk from 'chalk';
import 'normalize.css';
import './index.css';


console.log(chalk.bgGreen.black('main jsx'));

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
