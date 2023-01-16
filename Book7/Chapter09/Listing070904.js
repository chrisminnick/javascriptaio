import express from 'express';
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
