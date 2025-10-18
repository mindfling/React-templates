import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Container } from './views/Container/Container';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';


const App = () => {
  
  const myAppTitle = 'Новое приложение';
  
  return (
    <>
      <Header />
      <NotFoundPage />
      <Footer />
    </>
  );
}


export default App;
