import ApplicantsModel from '../models/user.model.js';
import JobsModel from '../models/jobs.model.js';

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
        const job = JobsModel.getById(id);
        if (!job) {
            return res.status(404).send('Job not found');
        }
        return res.render('job_details', { job ,  userEmail: req.session.userEmail  });
    }

    applyToJob(req, res, next) {
        // Handle the form submission here, including the file upload
        // Multer middleware (uploadFile.single('resume')) will handle the file upload
        console.log('Form data:', req.body);
        console.log('Uploaded file:', req.file);

        // Redirect or send a response as needed
        // var jobs = JobsModel.get();
        // res.render('jobs' , {jobs});   // either way works
        res.redirect('/jobs' , { userEmail: req.session.userEmail });
    }
}