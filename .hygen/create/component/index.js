module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'Type the name of the Component ',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Nested directory in which the Component is? (by default) '
      }
    ]

    return inquirer.prompt(questions).then(answers => {
      console.log('Lets make a Component');
      const {component_name, dir} = answers;
      const path = `${dir ? `${dir}/` : ''}${component_name}`;
      const absPath = `src/components/${path}`;
      return {...answers, path, absPath};
    });
  }
}
