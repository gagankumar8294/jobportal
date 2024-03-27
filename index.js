import express from 'express';
import userController from './src/controllers/user.controller.js';
import JobsController from './src/controllers/jobs.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import ValidationRequest from './src/middlewares/Validation.middleware.js';
import { uploadFile } from './src/middlewares/fileUploadMiddleware.js'
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';

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


const jobsController = new JobsController();
const UserController = new userController();


server.get('/', jobsController.getHomepage);
server.get('/jobs', jobsController.renderJobs);
server.get('/postjob', jobsController.renderPostJob);
server.get('/updatejob/:id',auth, jobsController.updateJob);
server.get('/jobs/:id', jobsController.viewJobDetails);

server.get('/register', UserController.getRegister);
server.get('/login', UserController.getLogin);


server.post('/register', UserController.postRegister);
server.post('/login', UserController.postLogin);
server.post('/deletejob/:id',auth,jobsController.deleteJob);
server.post('/',auth,ValidationRequest, jobsController.createPostJob);
server.post('/updatejob',auth, jobsController.postUpdatedJob);
server.post('/apply', uploadFile.single('resume'), jobsController.applyToJob);


server.use(express.static('public'));
server.use(express.static('src/views'))
server.listen(3000);
console.log("server listening on port 3000 http://localhost:3000");