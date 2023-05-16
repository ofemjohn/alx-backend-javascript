const express = require('express');

const app = express();

const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students\n');
  let students = [];
  countStudents(DATABASE).then((data) => {
    students = data;
  });
  res.end(students.join('\n'));
});

app.listen(1245);

module.exports = app;
