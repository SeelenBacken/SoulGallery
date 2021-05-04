import {describe} from 'mocha';
import {expect} from 'chai';
const pictureHandler = require('./pictureHandler');

describe('Simple Picture Test', () => {
  it('Should Save Image', () => {
    expect(pictureHandler.savePicture.bind()).to.not.throw(pictureHandler.PictureHandlerError);
  });
  it('Should Create new Folder', () => {
    expect(pictureHandler.createDirectory.bind()).to.not.throw(pictureHandler.PictureHandlerError);
  });
  it('Should Move image in new Folder', () => {
    console.warn('SPT_MoveImage not implemented');
    expect(false).to.be.true;
  });
  it('Should delete image (and folder)', () => {
    expect(pictureHandler.delPicture.bind()).to.not.throw(pictureHandler.PictureHandlerError);
  });
});
