const ValidationRequest = (req, res, next) => {
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
        next();
}

export default ValidationRequest;