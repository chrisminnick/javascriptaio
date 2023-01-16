const getUserDetailsWithPromise = (userId) => {
  return new Promise((resolve, reject) => {
    const user = getUserById(userId);
    if (user) {
      resolve(user);
    } else {
      reject('User not found');
    }
  });
};

const getUserById = (userId) => {
  return null;
};

let isLoading = true;
getUserDetailsWithPromise(1)
  .then(function (user) {
    console.log('User details with promise: ' + user.name);
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  })
  .finally(() => {
    isLoading = false;
    console.log('isLoading: ' + isLoading);
  });
