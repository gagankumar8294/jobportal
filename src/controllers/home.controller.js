import path from 'path';

export default class HomepageController {
    
    getHomepage(req, res) {
        return res.sendFile(path.join(path.resolve(), 'src', 'views','index.html'));
    }
}