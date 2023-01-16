function makeError(message) {
  const error = new Error(message);
  error.name = 'MyError';
  return error;
}
const error = makeError('oops');
console.log(error.name);
console.log(error.message);
console.log(error.stack);
