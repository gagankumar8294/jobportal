import express from 'express';
import HomepageController from './src/controllers/home.controller.js'

const server = express();

const homeController = new HomepageController()

server.get('/', (req, res) => {
    return res.send("welcome to Job portal")
});

server.listen(3000);

console.log("server listening on port 3000 https://localhost:3000");