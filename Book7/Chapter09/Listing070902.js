import express from 'express';
const app = express();
const port = 3000;

app.get('/log/:myArg', (req, res) => {
  console.log(req.params.myArg);
  res.send('Hello World! You requested ' + req.params.myArg);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
