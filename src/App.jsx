import chalk from 'chalk';
// * by export Header
// import { Header } from './components/Header/Header';
// * by export default
import Header from './components/Header';
import Main from './components/Main';
import Layout from './components/Layout';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
