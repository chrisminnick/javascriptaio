function greetInSpanish(name) {
  return `Hola, ${name}`;
}

function getUserName(callback) {
  let firstName = prompt('Enter your first name');
  return callback(firstName);
}

getUserName(greetInSpanish);
