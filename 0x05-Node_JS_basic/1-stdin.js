const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
});

read.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});

read.on('close', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to Holberton School, what is your name?');
