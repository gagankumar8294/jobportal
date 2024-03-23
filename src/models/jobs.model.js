// Mapping objects for category and designation
// const categoryMapping = {
//     1: 'Tech',
//     2: 'Non Tech'
// };

// const designationMapping = {
//     1: 'HR',
//     2: 'SDE',
//     3: 'DevOps',
//     4: 'MERN Developer',
//     5: 'MEAN Developer',
//     6: 'JAVA Developer',
//     7: 'Front-End Developer',
//     8: 'Back-End Developer',
//     9: 'Full-Stack Developer'
// };

export default class JobsModel {

    constructor(_id,_category, _designation, _location, _company, _salary, _positions){
        this.id = _id
        this.category = _category
        this.designation = _designation
        this.location = _location
        this.company = _company
        this.salary = _salary
        this.positions = _positions
    }

    static get() {
        return jobs;
    }

    static add(jobObj){
        let newJob = new JobsModel(
            jobs.length + 1,
            jobObj.category,
            jobObj.designation, 
            jobObj.location, 
            jobObj.company, 
            jobObj.salary, 
            jobObj.positions,
            )
        jobs.push(newJob);
    }
}

var jobs = [
    new JobsModel(1, 'Mern', 'HR', 'america','google', 199999, 1),
    new JobsModel(2, 'SDE', 'Employee', 'wall street','alphabet',20000, 2),
    new JobsModel(3, 'FullStack', 'TEAm Leader', 'tokyo','coding ninja',50000000,3),
]