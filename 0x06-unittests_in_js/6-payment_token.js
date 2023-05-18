function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({
      data: "Successful response from the API",
    });
  } else {
    return Promise.reject("API call failed");
  }
}

module.exports = getPaymentTokenFromAPI;
