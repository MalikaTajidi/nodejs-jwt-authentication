const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv') // Load environment variables
dotenv.config(); 

const app = express();
// Importing all the Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Connect to database
mongoose.connect(process.env.MONGO)
    .then(() => console.log('connected to database!'))
    .catch(err => console.error('Database connection error:', err));

//middleware
app.use(express.json());

// Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('the server is up and running on port 3000'));
