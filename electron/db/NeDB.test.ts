import {describe} from 'mocha';
import {expect} from 'chai';
const fs = require('fs');
const {NeDB} = require('./NeDB');

describe('Database Tests', async () => {
  it('Should Init Database', async () => {
    const db = new NeDB(true);
    await db.find((item) => {
      expect(item).to.be.an('object');
    });
  });

  it('Should Save an Image', () => {
    const picString = fs.readFileSync(__dirname + '/test.png').toString('base64');
    const db = new NeDB(true);
    db.savePicture(picString, (id) => {
      db.getPicture(id, (imageContent) => {
        expect(imageContent).to.be.an('string');
        expect(imageContent.slice(-1)).to.equal('=');
      });
    });
  });
});
