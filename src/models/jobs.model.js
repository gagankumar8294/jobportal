
export default class JobsModel {

    constructor(_id,_category, _designation, _location, _company, _salary, _positions){
        this.id = _id;
        this.category = _category;
        this.designation = _designation;
        this.location = _location;
        this.company = _company;
        this.salary = _salary;
        this.positions = _positions;
        this.applicants = [];
    }

    static get() {
        return jobs;
    }

    static getJobIDApplicants(id) {
        return jobs.find(job => job.id === parseInt(id));
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

    static addApplicant(id, name, email,contact, resume) {
        const job = jobs.find(
            (j) => j.id == id
        );

        if (!job) {
            return "job not found";
        }else {
            const newApplicantId = job.applicants.length + 1;
            job.applicants.push({
                id: newApplicantId, 
                name: name, 
                email: email, 
                contact: contact,
                resume: resume 
            });
        }
    }

    // find the id
    static getById(id) {
        return jobs.find((p) => p.id == id);
    }

    // update
    static update(jobObj){
        const index = jobs.findIndex(
            (p) => p.id == jobObj.id
        );
        jobs[index] = jobObj;
    }

    // delete
    static delete(id) {
        const index = jobs.findIndex(
            (p) => p.id == id
        );
        jobs.splice(index, 1);
    }
}

var jobs = [
    new JobsModel(1, 'Mern', 'HR', 'america','google', 19999999, 10),
    new JobsModel(2, 'SDE', 'Employee', 'wall street','alphabet',2000000, 20),
    new JobsModel(3, 'FullStack', 'TEAm Leader', 'tokyo','coding ninja',50000000,30),
]