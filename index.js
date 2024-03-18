import express from 'express';
import HomepageController from "./src/controllers/home.controller.js";
import ApplicantsController from './src/controllers/applicants.controller.js';
import path from 'path';
const server = express();


server.set("view engine", "ejs")
server.set("views", path.join(path.resolve(),'src','views'))

const homeController = new HomepageController();

const applicantsController = new ApplicantsController();

server.get('/applicants', applicantsController.getApplicants);
server.get('/', homeController.getHomepage);
server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");