import { createRoot } from 'react-dom/client';
// * by export default App
import App from './App';
import 'normalize.css';
import './index.css';

const root = createRoot(document.querySelector('#root'));
root.render(
    <App />
);
