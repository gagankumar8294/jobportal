

export default class ApplicantsModel {

    constructor(_id,_name, _description, _price, _location){
       this.id = _id
        this.name = _name
        this.description = _description
        this.price = _price
        this.location = _location
    }

    static get() {
        return applicants;
    }
}

var applicants = [
    new ApplicantsModel(1, 'capaldi', 'capaldi@gmail.com', 999999999999,),
    new ApplicantsModel(2, 'youon', 'descrip', 19.99, 'manchester'),
    new ApplicantsModel(3, 'gomam', 'miranda', 19.99, 'tokyo'),
    new ApplicantsModel(4, 'frida', 'amanda', 19.99, 'singapore'),
]