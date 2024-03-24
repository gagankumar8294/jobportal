import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/resume/');
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    },
});

export const uploadFile = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true); // Allow only PDF files
        } else {
            cb(new Error('Only PDF files are allowed'));
        }
    },
})