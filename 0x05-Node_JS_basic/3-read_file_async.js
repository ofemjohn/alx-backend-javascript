const fs = require('fs');

function countStudents(path) {
  const response = [];
  let msg;

  const content = fs.readFileSync(path, 'utf8').split('\n');

  const students = content.filter((item) => item).map((item) => item.split(','));

  const numberOfStudents = students.length ? students.length - 1 : 0;
  msg = `Number of students: ${numberOfStudents}`;
  console.log(msg);

  response.push(msg);

  const fields = students.reduce((acc, student) => {
    if (student[3] in acc) {
      acc[student[3]].push(student[0]);
    } else {
      acc[student[3]] = [student[0]];
    }
    return acc;
  }, {});

  delete fields.field;

  for (const key of Object.keys(fields)) {
    msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
    console.log(msg);
    response.push(msg);
  }

  return response;
}

module.exports = countStudents;
