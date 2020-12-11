const express = require('express');

const SchemeRouter = require('./data/recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', SchemeRouter);

module.exports = server;