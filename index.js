const inquirer = require('inquirer');



inquirer
  .prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What do you want to do?',
      choices: [
        'fight',
        'die',
        
        'Talk to the receptionist'
      ]
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size do you need?',
      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });