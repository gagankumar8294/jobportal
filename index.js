import express from 'express';
import userController from './src/controllers/user.controller.js';
import jobsController from './src/controllers/jobs.controller.js'
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import ValidationRequest from './src/middlewares/Validation.middleware.js';
import { uploadFile } from './src/middlewares/fileUploadMiddleware.js'
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import applicantsController from './src/controllers/applicants.controller.js'

const server = express();

// session 
server.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false },
}))

server.use(express.urlencoded({extended: true}));

server.set("view engine", "ejs")
server.set("views", path.join(path.resolve(),'src','views'))
server.use(expressEjsLayouts);


const JobsController = new jobsController();
const UserController = new userController();
const ApplicantsController = new applicantsController();

server.get('/', JobsController.getHomepage);
server.get('/jobs', JobsController.renderJobs);
server.get('/postjob',auth, JobsController.renderPostJob);
server.get('/updatejob/:id',auth, JobsController.updateJob);
server.get('/jobs/:id', JobsController.viewJobDetails);
// server.get('/updatejob',auth, JobsController.updateJob);

server.get('/applicants', ApplicantsController.getApplicants);
server.post('/jobs/:id', ApplicantsController.addApplicants);


server.get('/register', UserController.getRegister);
server.get('/login', UserController.getLogin);
server.get('/logout', UserController.logout);

server.post('/register', UserController.postRegister);
server.post('/login', UserController.postLogin);
server.post('/deletejob/:id',auth, JobsController.deleteJob);
server.post('/',auth,ValidationRequest, JobsController.createPostJob);
server.post('/updatejob',auth,JobsController.postUpdatedJob);
server.post('/applicants', uploadFile.single('resume'), JobsController.applyToJob);

server.use(express.static('public'));
server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");