import express from 'express';
import { Router } from 'express';
const userRouter = Router();

const app = express();
const port = 3000;

userRouter.get('/admin', (req, res, next) => {
  throw new Error('Nice try!');
});

app.use('/users', userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
