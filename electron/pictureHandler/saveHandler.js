import { PictureHandlerError } from './pictureHandler';

function savePicture(image, dirPath) {
  try {

  } catch (e) {
    throw new PictureHandlerError('Error Saving Picture')
  }
}

function createDirectory(title, dirPath) {
  try {
    console.log(process.env.APPDATA);
  } catch (e) {
    throw new PictureHandlerError('Could not create Directory', e)
  }
}

function delPicture(image, dirPath) {
  throw new PictureHandlerError('delPicture not implemented yet')
}
