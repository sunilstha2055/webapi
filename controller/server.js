const http = require('http');
const cors = require('cors');

// Sample data to return as JSON
const data = {
  message: 'Hello from Node.js!',
  items: [1, 2, 3, 4, 5]
};

const server = http.createServer((req, res) => {
  // Handle CORS for Angular frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Define routes
  if (req.method === 'GET' && req.url === '/api/data') {
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
