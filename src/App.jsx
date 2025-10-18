import { Container } from './views/Container/Container';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';


const App = () => {
  
  const myAppTitle = 'Новое приложение';
  
  return (
    <>
      <Header />
      
      <Container>
        <div className="title">
          <h1 className="main__title">Main Заголовок</h1>
          <p className="main__subtitle">Еще подзаголовок {myAppTitle}</p>
        </div>
        <div className="content">
          <p className="content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, voluptatem sed. Quo eos reiciendis, error temporibus aliquid sit nesciunt quidem numquam quos, deleniti libero! Perferendis nobis tenetur aliquid deleniti alias!</p>
          <p className="content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, voluptatem sed. Quo eos reiciendis, error temporibus aliquid sit nesciunt quidem numquam quos, deleniti libero! Perferendis nobis tenetur aliquid deleniti alias!</p>
        </div>
      </Container>
      
      <Footer />
    </>
  );
}


export default App;
