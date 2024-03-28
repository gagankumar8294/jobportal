import ApplicantsModel from "../models/applicants.model.js";

export default class ApplicantsController {
    
    getApplicants(req, res){
        var applicant = ApplicantsModel.get();
        console.log(applicant);
        res.render('applicants', {applicant});
    }

    addApplicants( req, res){
        const {name, email,} = req.body;
        const resume = '.pdf'+req.file.filename;
        console.log(name, email, resume);
        ApplicantsModel.add(name, email, resume);
        var applicant = ApplicantsModel.get();
        res.render('applicats', {applicants: applicant})
    }


}