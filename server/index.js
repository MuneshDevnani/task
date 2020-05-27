const http = require('http');
const app = require('./app');
const shared = require('./config/shared')

const port = process.env.PORT || shared.port;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server connected to port", port);
    
})