import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.scss';


createRoot(document.querySelector('#root'))
  .render(
      <App />
  );
