export default class ApplicantsModel {

    constructor(_id, _name, _email, _resume){
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.resume = _resume;
    }

    static get() {
        // res.render('applicants')
        return applicants;
    }

    static add(name, email, resume) {
        let newApplicant = new ApplicantsModel(
            applicants.length+1,
            name,
            email, 
            resume,
        );
        applicants.push(newApplicant);
    }
}
var applicants = [
    new ApplicantsModel(1, 'Mern', 'HR', 'america',),
    new ApplicantsModel(2, 'SDE', 'Employee', 'wall street',),
    new ApplicantsModel(3, 'FullStack', 'TEAm Leader', 'tokyo',),
];