import express from 'express';
import { Router } from 'express';
const customerRouter = Router();
const productRouter = Router();

const app = express();
const port = 3000;

customerRouter.get('/', (req, res, next) => {
  res.send('Customer list');
  next();
});

productRouter.get('/', (req, res, next) => {
  res.send('Product list');
  next();
});

app.use('/customers', customerRouter);
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
