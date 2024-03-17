import express from 'express';
import HomepageController from "./src/controllers/home.controller.js";

const server = express();

const homeController = new HomepageController()

server.get('/', homeController.getHomepage);
server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");