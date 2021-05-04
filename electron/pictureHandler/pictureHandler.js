var fs = require('fs');

function savePicture(image, dirPath) {
  try {

  } catch (e) {
    throw new PictureHandlerError('Error Saving Picture')
  }
}

function createDirectory(title, dirPath) {
  throw new PictureHandlerError('createDirectory not implemented yet')
}

function delPicture(image, dirPath) {
  throw new PictureHandlerError('delPicture not implemented yet')
}

class PictureHandlerError extends Error {
  constructor(message = 'generic PictureHandler Error', rootError = 'none') {
    super(message);
    this.name = "PictureHandlerError";
    this.error = rootError;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PictureHandlerError);
    }
    this.date = new Date();
  }
}

exports.savePicture = savePicture;
exports.delPicture = delPicture;
exports.createDirectory = createDirectory;
exports.PictureHandlerError = PictureHandlerError;
