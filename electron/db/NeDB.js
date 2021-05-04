let Datastore = require('nedb');

class NeDB {
  constructor(mockup = false) {
    this.db = new Datastore();
    this.db.insert({hello: 'world'});
    this.db.insert({hello: 'underworld'});

    if (mockup) {
      this.images = new Datastore();
    } else {
      this.images = new Datastore({filename: __dirname + '/images.db', autoload: true});
    }
  }

  savePicture(pictureString, callback){
    this.images.insert({pictureString: pictureString}, (err, newDoc) => {
      callback(newDoc._id);
    });
  }

  getPicture(pictureId, callback){
    this.images.findOne({_id: pictureId}, (err, doc) => {
      callback(doc.pictureString);
    });
  }

  getAllPictures(callback) {
    this.images.find({}, (err, docs) => {
      callback(docs);
    });
  }

  async find(callback) {
    await this.db.findOne({hello: 'world'}, (err, doc) => {
      if (err) {
        callback(err);
      }
      callback(doc);
    })
  }
}

exports.NeDB = NeDB;
