function asyncTask(param1, param2, callback) {
  // do something asynchronous
  if (error) {
    // if a callback is passed, call it with the error
    if (callback) {
      callback(new Error("oops. There's been an error"));
    }
    // otherwise, return a rejected promise
    return Promise.reject(new Error("oops. There's been an error"));
  }

  // do something else if there's no error

  // if a callback is passed, call it with the result
  if (callback) {
    callback(null, result);
  }
  // otherwise, return a resolved promise
  return Promise.resolve(result);
}
