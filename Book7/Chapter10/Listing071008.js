import express from 'express';
import mongoose from 'mongoose';

import postsRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

// Connecting to the database
mongoose
  .connect('mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(express.json());

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

export default app;
