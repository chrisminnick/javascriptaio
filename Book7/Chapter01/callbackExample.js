// example code demonstrating the node callback pattern
// this example is a simple function that takes a callback
// and calls it with a string

function callbackExample(callback) {
  callback("I'm a callback!");
}

// call the function and pass it a callback
callbackExample(function (str) {
  console.log(str);
});

// output: I'm a callback!

// Path: Book7/Chapter01/callbackExample2.js
// example code demonstrating the node callback pattern
// this example is a function that takes a callback
// and calls it with an error and a string

function callbackExample2(callback) {
  callback(new Error("I'm an error!"), "I'm a callback!");
}

// call the function and pass it a callback
callbackExample2(function (err, str) {
  if (err) {
    console.log(err);
  } else {
    console.log(str);
  }
});

// output: Error: I'm an error!

// Path: Book7/Chapter01/callbackExample3.js
// using the fs module to read a file asynchronously
// and then pass the data to a callback

var fs = require('fs');

// read the file asynchronously
fs.readFile('Book7/Chapter01/callbackExample3.js', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
