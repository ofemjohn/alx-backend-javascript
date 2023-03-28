// eslint-disable-next-line consistent-return
const getListStudentIds = (getListStudents) => {
  if (!Array.isArray(getListStudents)) return [];

  return getListStudents.map((num) => num.id);
};
export default getListStudentIds;
