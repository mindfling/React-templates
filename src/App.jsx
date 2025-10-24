import chalk from 'chalk';


function App() {
  console.log(chalk.blueBright('App hallo'));

  return (
    <>
      <div className="container">
        <h1 className="title">Заголовок</h1>
        <h2 className="subtitle">Подзаголовок</h2>
      </div>
    </>
  );
}

export default App
