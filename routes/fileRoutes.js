const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { upload } = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/', authMiddleware, getFiles);

module.exports = router;
