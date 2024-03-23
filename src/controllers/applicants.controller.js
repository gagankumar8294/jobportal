import path from 'path';
import ApplicantsModel from '../models/applicants.model.js'
import JobsModel from '../models/jobs.model.js';
export default class ApplicantsController {
    
    renderApplicantForm(req, res){
        return res.render('applicants');
    }

    renderJobs(req, res){
        var jobs = JobsModel.get();
        return res.render('jobs', {jobs: jobs});
    }

    // renderJobsForm(req, res){
    //     return res.render('jobsForm');
    // }

    addApplicant(req, res){
        console.log(req.body);
    }

    renderPostJob(req, res){
        return res.render('postjob', {errorMessage: null,});
    }

    createPostJob(req, res){
        console.log(req.body);
        JobsModel.add(req.body);
        let jobs = JobsModel.get();
        res.render('jobs', {jobs: jobs});
    }
}