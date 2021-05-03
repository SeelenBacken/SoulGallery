function savePicture(image, dirPath) {
  throw new PictureHandlerError('savePicture not implemented yet')
}

function createDirectory(title, dirPath) {
  throw new PictureHandlerError('createDirectory not implemented yet')
}

function delPicture(image, dirPath) {
  throw new PictureHandlerError('delPicture not implemented yet')
}

class PictureHandlerError extends Error {
  constructor(message = 'generic PictureHandler Error') {
    super(message);
    this.name = "PictureHandlerError";

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
