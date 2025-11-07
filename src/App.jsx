import chalk from 'chalk';
import Header from './components/Header';
import Main from './components/Main';
import Layout from './components/Layout';
import Footer from './components/Footer';


const App = () => {
  console.log(chalk.blueBright('App hallo'));

  return (
    <>
      <Header />
      <Main>
        <Layout>
          <h2 className='title'>THis is Site Title</h2>
        </Layout>
      </Main>
      <Footer />
    </>
  );
}

export default App;
