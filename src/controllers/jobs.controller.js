import ApplicantsModel from '../models/user.model.js';
import JobsModel from '../models/jobs.model.js';
import { sendConfirmationEmail } from '../middlewares/emailService.js';

export default class ApplicantsController {

    getHomepage(req, res) {
        return res.render('index.ejs' , { userEmail: req.session.userEmail });
    }

    // Rendering a JOBS page
    renderJobs(req, res, next){
        var jobs = JobsModel.get();
        return res.render('jobs', {jobs: jobs ,  userEmail: req.session.userEmail });
    }

    // To dsplay the CREATE JOB FORM
    renderPostJob(req, res, next){
        return res.render('postjob', {errorMessage: null,  userEmail: req.session.userEmail });
    }

    // after Posting a Job REDIRECT to JOBS Page
    createPostJob(req, res, next){
        console.log(req.body);
        JobsModel.add(req.body);
        let jobs = JobsModel.get();
        res.render('jobs', {jobs: jobs ,  userEmail: req.session.userEmail });
    }

    // Update Job
    updateJob(req, res, next) {
        const  id  = req.params.id;
        
        const jobFound = JobsModel.getById(id);
        if(jobFound) {
            res.render('updatejob', {
                job: jobFound,
                errorMessage: null,
                 userEmail: req.session.userEmail 
            });
        }
        else {
            res.status(401).send("jobs not found");
        }
    }

    // Post Updateed job fields
    postUpdatedJob(req, res, next) {
        JobsModel.update(req.body);
        let jobs = JobsModel.get();
        res.render('jobs', {jobs ,  userEmail: req.session.userEmail });
    }

    // Delete Job
    deleteJob(req, res, next) {
        const id = req.params.id;
        
        const jobFound = JobsModel.getById(id);
        if(!jobFound) {
            return res.status(401).send('job not found');
        }
        
        JobsModel.delete(id);
        var jobs = JobsModel.get();
        res.render('jobs', {jobs ,  userEmail: req.session.userEmail });
    }

    viewJobDetails(req, res, next) {
        const id = req.params.id;
        // console.log(id);
        const job = JobsModel.getById(id);
        if (!job) {
            return res.status(404).send('Job not found');
        }
        return res.render('job_details', { job ,  userEmail: req.session.userEmail  });
    }

    applyToJob(req, res, next) {
        
        const { id, name,contact, email } = req.body;
        console.log(id, name, email);
        const resume = req.file
        const jobFound = JobsModel.getById(id);
        
        if(jobFound) {
            JobsModel.addApplicant(id,name,email,contact,resume);
            var jobs = JobsModel.get();
            res.render('jobs', { jobs : jobs});
            sendConfirmationEmail(email);
            next();
        }else {
            res.status(401).send('Produt not found');
        }
    }

    viewApplicants(req, res){
        const id = req.params.id;
        const jobFound = JobsModel.getJobIDApplicants(id);
        if(jobFound) {
            // console.log(jobFound.applicants);
            res.render('applicants', {
                job: jobFound,
                errorMessage: null,
                 userEmail: req.session.userEmail 
            });
        }
        else {
            res.status(401).send("jobs not found");
        }
    }

    returnApplicants(req, res) {
        const applicants = JobsModel.get();
        return res.send(applicants);
    }
}