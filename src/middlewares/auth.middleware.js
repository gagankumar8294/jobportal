export const auth = (req, res) => {

    if(req.session.userEmail) {
        next();
    } else{
        res.redirect('/login');
    }
}