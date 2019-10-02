import * as multer from 'multer';

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, "uploads/");
    },
    filename: (req, file, callback) => {

        callback(null, file.originalname);

    },

});

const uploads = multer({
    storage: storage
});

export default uploads;