import express from 'express';

const router = express.Router();

// create a new post
router.post('/', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// get all posts
router.get('/', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// get a single post
router.get('/:id', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// update a post
router.put('/:id', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// delete a post
router.delete('/:id', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

export default router;
