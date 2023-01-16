import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

function validateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];

  if (token == null) res.sendStatus(400).send('Token not present');
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).send('Token invalid');
    } else {
      req.user = user;
      next();
    }
  });
}

// Creating a new post
router.post('', validateToken, (req, res, next) => {
  const post = new Post({
    text: req.body.text,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: 'Post added successfully',
      post: {
        ...createdPost,
        id: createdPost._id,
      },
    });
  });
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
