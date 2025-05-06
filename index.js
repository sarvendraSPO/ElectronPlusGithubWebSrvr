const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
//require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
/*function buildMongoURI({ username, password, host, dbName, options,appName }) {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    const defaultOptions = 'retryWrites=true&w=majority';   
  
    return `mongodb+srv://${encodedUsername}:${encodedPassword}@${host}/${dbName}?${options || defaultOptions}&appName=${appName}`;
  }
  const mongoURI = buildMongoURI({
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    appName: process.env.DB_APP_NAME,
  }); */
  //mongodb+srv://sarvendraspo:sy8Jmwt56s68YO8R@clustersk0.rgmhl3z.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSK0
 const mongoURI = `mongodb+srv://sarvendraspo:sy8Jmwt56s68YO8R@clustersk0.rgmhl3z.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSK0`;
  mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));


const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Use user routes
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});