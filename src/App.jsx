import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Container } from './views/Container/Container';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

/* выводим разное содержимое в зависимости от адреса роута */
const router = createBrowserRouter([
  // main page
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Container>
            <h1 className="title">Заголовок Список товаров</h1>
          </Container>
        </main>
        <Footer />
      </>
    ),
  },
  // path for 404 NotFoundPage
  {
    path: '*',
    element: (
      <>
        <Header />
        <main>
          <NotFoundPage />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
