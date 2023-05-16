const welcomeMessage = 'Welcome to Holberton School, what is your name?\n';

process.stdout.write(welcomeMessage);

process.stdin.setEncoding('utf8');

const readline = () => {
  const read = process.stdin.read();
  return read !== null ? read : '';
};

const readname = (name) => {
  process.stdout.write(`Your name is: ${name}\n`);
};

const end = () => {
  process.stdout.write('This important software is now closing\n');
};

process.stdin.on('readable', () => {
  const name = readline();
  readname(name);
  end();
});
