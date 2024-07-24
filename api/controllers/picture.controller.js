const pictureRouter = require('express').Router();
const Picture = require('../models/picture');
const upload = require('../utils/services/multer');

pictureRouter.post('/upload', upload.array('pictures', 12), async (request, response) => {
  try{
    const files = request.files;
    const uploadedImages = [];

    for (const file of files) {
      const picture = new Picture({
        url: file.path,
        description: file.originalname
      });

      const savedPicture = await picture.save();
      uploadedImages.push(savedPicture);
    }
    response.status(200).json(uploadedImages);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});