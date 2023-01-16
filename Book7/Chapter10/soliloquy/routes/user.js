import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1800s',
  });
}

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) throw err;
    if (user) {
      res.status(409).json({
        message: 'User already exists!',
      });
    }
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({
        message: 'User created!',
      });
    }
  });
});

// Logging in a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({
        message: 'Login failed!',
      });
    }
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(401).json({
          message: 'Incorrect password',
        });
      }
      const accessToken = generateAccessToken({ user: req.body.email });

      res.status(200).json({
        accessToken: accessToken,
        userId: user._id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export default router;
