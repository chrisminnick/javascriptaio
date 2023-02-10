import express from 'express';
import { Router } from 'express';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
const userRouter = Router();
const app = express();
const port = 3000;
const __dirname = process.cwd();
app.use(morgan('combined'));

app.use(express.json());
app.use(helmet());
app.use(cors());
userRouter.post('/', async (req, res, next) => {
  try {
    const user = req.body;
    user.id = uuidv4();
    await fs.writeFile(
      `${__dirname}/users/${user.id}.json`,
      JSON.stringify(user)
    );
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});
userRouter.get('/', async (req, res, next) => {
  try {
    const users = await fs.readdir(`${__dirname}/users`);
    res.send(users);
  } catch (err) {
    next(err);
  }
});
userRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await fs.readFile(`${__dirname}/users/${req.params.id}.json`);
    res.send(JSON.parse(user));
  } catch (err) {
    next(err);
  }
});
app.use('/users', userRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
