import express from 'express';
import HomepageController from "./src/controllers/home.controller.js";
import ApplicantsController from './src/controllers/applicants.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
const server = express();

server.use(express.urlencoded({extended: true}));

server.set("view engine", "ejs")
server.set("views", path.join(path.resolve(),'src','views'))
server.use(expressEjsLayouts);

const homeController = new HomepageController();
const applicantsController = new ApplicantsController();


server.get('/', homeController.getHomepage);
server.get('/jobs', applicantsController.renderJobs);
server.get('/postjob', applicantsController.renderPostJob);
server.post('/', applicantsController.createPostJob);


server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");