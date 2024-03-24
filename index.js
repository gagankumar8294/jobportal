import express from 'express';
import HomepageController from "./src/controllers/home.controller.js";
import ApplicantsController from './src/controllers/applicants.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import ValidationRequest from './src/middlewares/Validation.middleware.js';

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
server.get('/updatejob/:id', applicantsController.updateJob);
server.post('/deletejob/:id', applicantsController.deleteJob);
server.post('/',ValidationRequest, applicantsController.createPostJob);
server.post('/updatejob', applicantsController.postUpdatedJob);

server.use(express.static('public'));
server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");