const getFullResponseFromAPI = (trueORfalse) => new Promise((resolve, reject) => {
  if (trueORfalse) resolve({ status: 200, body: 'success' });
  reject(Error('the fake Api is not working properly'));
});

export default getFullResponseFromAPI;
