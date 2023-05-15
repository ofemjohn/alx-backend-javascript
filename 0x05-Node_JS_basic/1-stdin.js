const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});

read.on('close', () => {
  console.log('This important software is now closing');
});
