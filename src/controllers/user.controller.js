import UserModel from "../models/user.model.js";
import JobsModel from "../models/jobs.model.js";
export default class UserController {

    getRegister(req, res) {
        return res.render('register');
    }

    getLogin(req, res) {
        return res.render('login', { errorMessage: null });
    }

    postRegister(req, res){
        // extracting data using object destructuring
        const { name, email, password } = req.body;
        UserModel.add(name, email, password); // want to add validations
        return res.render('login', { errorMessage: null }); // not gonna impact 'return'
    }
 
    postLogin(req, res){
        const{email, password} = req.body;
        const user = UserModel.isValidUser(
            email,
            password
        );
        if (!user) {
            return res.render('login', {
                errorMessage: 'Invalid username or password'
            });
        } 
        req.session.userEmail = email;
        var jobs = JobsModel.get();
        return res.render('jobs', {jobs ,  userEmail: req.session.userEmail });
    }
}