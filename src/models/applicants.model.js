

export default class ApplicantsModel {

    constructor(_id,_name, _description, _price, _imageUrl){
       this.id = _id
        this.name = _name
        this.description = _description
        this.price = _price
        this.imageUrl = _imageUrl 
    }

    static get() {
        return applicants;
    }
}

var applicants = [
    new ApplicantsModel(1, 'applicant 1', 'description', 19.99, 'https://imagurl'),
    new ApplicantsModel(1, 'applicant 1', 'description', 19.99, 'https://imagurl'),
    new ApplicantsModel(1, 'applicant 1', 'description', 19.99, 'https://imagurl'),
    new ApplicantsModel(1, 'applicant 1', 'description', 19.99, 'https://imagurl'),
]