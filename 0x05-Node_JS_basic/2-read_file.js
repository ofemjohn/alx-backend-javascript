const fs = require('fs');

function countStudents(path) {
  const students = [];
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    lines.forEach((line) => {
      const [firstName, lastName, field] = line.split(',');
      students.push({
        firstName,
        lastName,
        field,
      });
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const numberOfStudents = students.length;
  console.log(`Number of students: ${numberOfStudents}`);

  const fieldToStudents = students.reduce((acc, student) => {
    acc[student.field] = acc[student.field] || [];
    acc[student.field].push(student.firstName);
    return acc;
  }, {});

  Object.keys(fieldToStudents).forEach((field) => {
    console.log(`Number of students in ${field}: ${fieldToStudents[field].length}. List: ${fieldToStudents[field].join(', ')}`);
  });
}

module.exports = countStudents;
