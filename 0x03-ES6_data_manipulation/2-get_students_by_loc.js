// eslint-disable-next-line arrow-body-style
const getStudentsByLocation = (getListStudents, city) => {
  return getListStudents.filter((getListStudents) => getListStudents.location === city);
};

export default getStudentsByLocation;
