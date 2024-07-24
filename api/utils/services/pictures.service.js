//spell-checker: disable
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Picture = require('../../models/picture');
const logger = require('../logger');
const cloudinary = require('cloudinary').v2;
const config = require('../../utils/config')

cloudinary.config(config.cloudinaryConfig);

const uploadDir = path.join(__dirname, '../../public/files');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }).array('pictures', 5);

const createPictures = async (files) => {
  try {
    const savedPictures = [];
    for (const file of files) {

      const result = await cloudinary.uploader.upload(file.path);

      const picture = new Picture({
        name: file.originalname,
        url: result.secure_url,
        type: file.mimetype,
      });

      // Guarda la imagen en la base de datos
      const savedPicture = await picture.save();
      savedPictures.push(savedPicture);
    }
    return savedPictures;
  } catch (error) {
    logger.error('Error creating pictures:', error);
    throw new Error('Error creating pictures');
  }
};

const uploadPictures = (req, res, next) => {
  upload(req, res, async () => {
    await createPictures(req.files);
    next();
  });
};

module.exports = { uploadPictures, createPictures };
