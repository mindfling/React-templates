import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import chalk from 'chalk';
import 'normalize.css';
import './index.css';


console.log(chalk.bgGreen.black('main jsx'));

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<App />);
