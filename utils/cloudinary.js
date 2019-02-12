const cloudinary = require('../config/cloudinary.js')

const uploadFile = (fileBuffer) => {
  // because cloudinary only supports the callback syntax
  return new Promise((resolve, reject) => {
    //upload_stream takes a afew parameters, 1st one>> some kind of config object, 2nd one>> callback
    cloudinary.v2.uploader.upload_stream(
      { resource_type: 'raw' },
      ( err, res) => {
        if(err) return reject(err.res)
        resolve(res)
      }
    ).end(fileBuffer)
  })
}

module.exports = {
  uploadFile
}