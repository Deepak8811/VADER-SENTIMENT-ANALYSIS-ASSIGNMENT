const File = require('../models/File');

exports.uploadFile = async (req, res) => {
    try {
        const { originalname, mimetype, buffer } = req.file;
        const file = new File({
            filename: originalname,
            fileType: mimetype,
            data: buffer,
            user: req.user.id
        });
        await file.save();
        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFiles = async (req, res) => {
    try {
        const files = await File.find({ user: req.user.id });
        res.status(200).json(files);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
