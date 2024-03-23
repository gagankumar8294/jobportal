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

        const {location, company, salary, positions, category, designation } = req.body;
        let errors=[];
        if(!location || location.trim() ==''){
            errors.push("location is required");
        }
        if(!company || company.trim() ==''){
            errors.push("company Name is required");
        }
        if(!salary || parseFloat(salary)<1){
            errors.push("Salary must be a positive vale");
        }
        if(!positions || parseFloat(positions)<1){
            errors.push("Positions must be a positive vale");
        }
        if (!category || category.trim() == '') {
            errors.push("Job category is required");
        }
        if (!designation || designation.trim() == '') {
            errors.push("Job designation is required");
        }

        if(errors.length>0) {
            return res.render('postjob', {errorMessage:errors[0]})
        }

        console.log(req.body);
        JobsModel.add(req.body);
        let jobs = JobsModel.get();
        res.render('jobs', {jobs: jobs});
    }
}