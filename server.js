const express = require('express');
const projectsRouter = require('./projects/projects-router');
const server = express();

server.use(express.json());
server.use('/api', projectsRouter);

server.get("/", (req, res) => {
    res.json({message: "Hello!"})
})

module.exports = server;