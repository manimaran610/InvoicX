
const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON data file
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
