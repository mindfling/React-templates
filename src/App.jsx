import chalk from 'chalk';
import { Fragment } from 'react';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <Fragment>
      <div className="container">
        <h1 className="title">Заголовок</h1>
        <h2 className="subtitle">Подзаголовок</h2>
      </div>
    </Fragment>
  );
}

export default App
