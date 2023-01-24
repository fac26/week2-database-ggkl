const express = require('express');

const server = express();
// const bodyParser = express.urlencoded({extended: false});

server.get('/', (request, response) => {
    response.send('hello big world!');
});

module.exports = server;
