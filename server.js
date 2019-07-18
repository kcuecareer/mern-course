const express = require('express');
const connectDB = require('./config/db');

// Created variable to hold Express
const app = express();

// Connect the database
connectDB();

// Initialize Middleware
app.use(express.json({ extened: false }));

app.get('/', (req, res) =>
  res.send('Server API is up and running')
);

// Define Routes in Server.js
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}!`)
);
