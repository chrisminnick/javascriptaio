import express from 'express';
const app = express();
const port = 3000;

app.get('/time', (req, res, next) => {
  res.currentTime = new Date();
  next();
});

app.get('/time', (req, res) => {
  res.send(`Hello World! The time is ${res.currentTime}.`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
