const express = require('express');
const server = express();

const tracksRouter = require('../tracks/tracks-router.js');
const cohortsRouter = require('../cohorts/cohorts.js');

server.use(express.json());

server.use('/api/tracks', tracksRouter);
server.use('/api/cohorts', cohortsRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});



module.exports = server;
