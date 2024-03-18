import path from 'path';
import ApplicantsModel from '../models/applicants.model.js'

export default class ApplicantsController {
    
    getApplicants(req, res) {    
        let applicants = ApplicantsModel.get(); // get function going to return Array of models
        console.log(applicants);
        return res.sendFile(path.join(path.resolve(), 'src', 'views','index.html'));
    }
}