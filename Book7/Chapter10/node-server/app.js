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

// Setting up the headers for the CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Parsing the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up the routes
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

// Exporting the app
export default app;
