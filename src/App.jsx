import chalk from 'chalk';
import { Header } from './components/Header/Header';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <>

      <Header />

    </>
  );
}

export default App
