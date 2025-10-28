import chalk from 'chalk';
import { Header } from './components/Header/Header';
import Main from './components/Main';
import Layout from './components/Layout';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <>
      <Header />
      <Main>
        <Layout>
          <h2 className='subtitle'>THis is Site Title</h2>
        </Layout>
        <Layout>
          <p className='text'>THis is Site Title</p>
          <p className='text'>THis is Site Title</p>
        </Layout>
        
      </Main>
    </>
  );
}

export default App
