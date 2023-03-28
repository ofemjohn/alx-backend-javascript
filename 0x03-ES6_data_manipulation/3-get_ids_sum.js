// eslint-disable-next-line arrow-body-style
const getStudentIdsSum = (getListStudents) => {
  return getListStudents.reduce((total, items) => total + items.id, 0);
};

export default getStudentIdsSum;
