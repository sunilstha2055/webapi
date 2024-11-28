const express = require('express'); // Import express
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts'); // Adjust the path based on your directory structure
const swaggerSetup = require('./swagger'); // Import Swagger setup if you added it

const app = express(); // Create an instance of Express
const PORT = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Mount routes
app.use('/api/posts', postRoutes);

// Set up Swagger (if included)
swaggerSetup(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
