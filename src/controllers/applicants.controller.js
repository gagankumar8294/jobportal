import path from 'path';
import ApplicantsModel from '../models/applicants.model.js'
import JobsModel from '../models/jobs.model.js';

export default class ApplicantsController {

    // Rendering a JOBS page
    renderJobs(req, res, next){
        var jobs = JobsModel.get();
        return res.render('jobs', {jobs: jobs});
    }

    // To dsplay the CREATE JOB FORM
    renderPostJob(req, res, next){
        return res.render('postjob', {errorMessage: null,});
    }

    // after Posting a Job REDIRECT to JOBS Page
    createPostJob(req, res, next){
        console.log(req.body);
        JobsModel.add(req.body);
        let jobs = JobsModel.get();
        res.render('jobs', {jobs: jobs});
    }

    // Update Job
    updateJob(req, res, next) {
        const  id  = req.params.id;
        
        const jobFound = JobsModel.getById(id);
        if(jobFound) {
            res.render('updatejob', {
                job: jobFound,
                errorMessage: null,
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
        res.render('jobs', {jobs});
    }
}