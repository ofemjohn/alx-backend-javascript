const express = require('express');
const { countStudents, readDatabase } = require('./3-read_file_async');

const app = express();
const args = process.argv.slice(2);
const DATABASE = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const { lines, database } = await readDatabase(DATABASE);
    res.send(`This is the list of our students\nNumber of students: ${countStudents(lines)}\nNumber of students in CS: ${database.CS.length}. List: ${database.CS.join(', ')}\nNumber of students in SWE: ${database.SWE.length}. List: ${database.SWE.join(', ')}\n`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
