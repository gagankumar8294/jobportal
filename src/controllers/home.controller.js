import path from 'path';

export default class HomepageController {
    
    getHomepage(req, res) {
        res.render('index')
    }
}