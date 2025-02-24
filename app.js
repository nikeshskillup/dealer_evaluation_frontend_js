const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5001;

// Enable CORS
app.use(cors());

// Serve static HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
