const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send('Welcome to "JOB PORTAL');
})

server.listen(3000)