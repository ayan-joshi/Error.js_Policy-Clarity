const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Handle root URL
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

