//spell-checker: disable
require('dotenv').config()
const PORT = process.env.PORT

let MONGODB_URI = process.env.MONGODB_URI
let ENVIRONMENT = process.env.NODE_ENV
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
  ENVIRONMENT = process.env.TEST_NODE_ENV
}

let cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}

module.exports = {
  ENVIRONMENT,
  MONGODB_URI,
  PORT,
  cloudinaryConfig
}