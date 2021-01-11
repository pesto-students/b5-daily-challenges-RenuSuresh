const allPromises = (args) => {
  const result = [];
  return new Promise((resolve, reject) => {
    args.forEach((promise, i) => {
      if (typeof promise.then == "function") {
        promise
          .then((value) => {
            result[i] = value;
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        result[i] = promise;
      }
    });
  });
};

export { allPromises };
