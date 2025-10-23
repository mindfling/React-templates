import chalk from 'chalk';
import React from 'react';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="title">Заголовок</h1>
        <h2 className="subtitle">Подзаголовок</h2>
      </div>
    </React.Fragment>
  );
}

export default App
