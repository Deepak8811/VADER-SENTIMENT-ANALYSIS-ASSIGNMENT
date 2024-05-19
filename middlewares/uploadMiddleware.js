const multer = require('multer');

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['audio/mpeg', 'video/mp4', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only MP3, MP4, and PDF are allowed.'));
    }
};

exports.upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 10 } });
