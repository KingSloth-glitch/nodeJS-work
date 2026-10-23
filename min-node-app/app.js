const greetUser = require('./greet');
const chalk = require('chalk');

const message = greetUser('Pontus');

console.log(chalk.green(message));
console.log(chalk.blue.bold('Du har skapat din egen modul!'));
