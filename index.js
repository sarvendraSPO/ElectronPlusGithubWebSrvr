const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});