function getUserDetailsWithPromise(userId) {
  return new Promise(function (resolve, reject) {
    const user = getUserById(userId);
    if (user) {
      resolve(user);
    } else {
      reject('User not found');
    }
  });
}

function getUserById(userId) {
  return null;
}

getUserDetailsWithPromise(1)
  .then(function (user) {
    console.log('User details with promise: ' + user.name);
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });
