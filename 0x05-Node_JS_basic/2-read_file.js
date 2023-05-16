const fs = require('fs');

function countStudents(path) {
  let database;

  try {
    database = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  database = database.toString().split('\n');

  let std = database.filter((item) => item);

  std = std.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = std.length ? std.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const area = {};
  for (const i in std) {
    if (i !== 0) {
      if (!area[std[i][3]]) area[std[i][3]] = [];

      area[std[i][3]].push(std[i][0]);
    }
  }

  delete area.field;

  for (const key of Object.keys(area)) {
    console.log(
      `Number of students in ${key}: ${area[key].length}. List: ${area[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
