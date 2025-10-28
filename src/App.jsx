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
      <Main>
        <Layout>
          <h2 className='title'>THis is Site Title</h2>
        </Layout>
        <Layout>
          <h3 className='subtitle'>THis is Subtitle 2</h3>
          <p className='text'>THis is Site Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minus maxime quaerat, rerum minima consectetur soluta eaque, nam facilis assumenda laudantium unde, itaque culpa! Cum magni natus doloremque minus excepturi!</p>
        </Layout>
        <Layout>
          <h3 className='text'>THis is Subtitle 3 </h3>
          <p className='text'>THis is Aspernatur amet deleniti voluptates alias consectetur animi accusantium vel, ad enim dolores natus unde tempore illum, magnam debitis! Expedita quia eligendi, minus asperiores ad reprehenderit ratione deleniti sint dolore maxime!
          Hic voluptatibus, eaque dolore minus ratione est natus tenetur fugit ipsa exercitationem veritatis non aut ipsum maxime, repellendus aliquam voluptate blanditiis pariatur quibusdam soluta iure deserunt. Cumque hic nam sunt.</p>
        </Layout>
      </Main>
    </>
  );
}

export default App;
