const express = require('express');

const films = require('../routes/films.js');
// const add = require('../routes/add.js');

const server = express();
// const bodyParser = express.urlencoded({extended: false});

server.get('/', films.get);
// server.get('/new', add.get);
// server.post('/new', bodyParser, add.post);

module.exports = server;

// static handler
const staticHandler = express.static('public');
server.use(staticHandler);
