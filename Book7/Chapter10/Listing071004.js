import express from 'express';

const router = express.Router();

// create a new user
router.post('/signup', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// login a user
router.post('/login', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

export default router;
