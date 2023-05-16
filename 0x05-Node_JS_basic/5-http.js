const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async').async;

const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;

  switch (url) {
    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.write('This is the list of our students\n');
      try {
        const students = await countStudents(DATABASE);
        res.end(students.join('\n'));
      } catch (error) {
        res.end(error.message);
      }
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;