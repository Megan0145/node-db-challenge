const express = require('express');
const projectsRouter = require('./projects/projects-router');
const resourcesRouter = require('./resources/resources-router')
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter)

server.get("/", (req, res) => {
    res.json({message: "Hello!"})
})

module.exports = server;