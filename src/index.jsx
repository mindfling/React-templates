import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.scss';


const rootElem = document.querySelector('#root');
console.log('rootElem: ', rootElem);

createRoot(rootElem)
  .render(
      <App />
  );
