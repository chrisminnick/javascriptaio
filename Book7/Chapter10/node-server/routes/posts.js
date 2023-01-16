import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import jwt from 'jsonwebtoken';
import Post from '../models/post.js';
const router = express.Router();

function validateToken(req, res, next) {
  //get token from request header
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
  //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
  if (token == null) res.sendStatus(400).send('Token not present');
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).send('Token invalid');
    } else {
      req.user = user;
      next(); //proceed to the next action in the calling function
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

// Updating a post
router.put('/:id', validateToken, (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    text: req.body.text,
  });
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    res.status(200).json({ message: 'Update successful!' });
  });
});

// Getting all the posts
router.get('', validateToken, (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: 'Posts fetched successfully!',
      posts: documents,
    });
  });
});

// Getting a single post
router.get('/:id', validateToken, (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found!' });
    }
  });
});

// Deleting a post
router.delete('/:id', validateToken, (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: 'Post deleted!' });
  });
});

export default router;
