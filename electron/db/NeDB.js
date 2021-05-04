let Datastore = require('nedb');

class NeDB {
  constructor(mockup = false) {
    this.db = new Datastore();
    this.db.insert({hello: 'world'});
    this.db.insert({hello: 'underworld'});

    if (mockup) {
      this.images = new Datastore();
      this.albums = new Datastore();
    } else {
      this.images = new Datastore({filename: __dirname + '/images.db', autoload: true});
      this.albums = new Datastore({filename: __dirname + '/albums.db', autoload: true});
    }
  }

  createAlbum(albumName, callback) {
    this.images.insert({albumName: albumName, thumbnail: ""}, (error, doc) => {
      callback(doc);
    })
  }

  getAlbum(albumName, callback) {
    this.images.find({album: albumName}, (error, docs) => {
      callback(docs);
    });
  }

  savePicture(pictureString, callback, album = "default", tags = [""]) {
    const image = {
      content: pictureString,
      dateTime: new Date(),
      album: album,
      tags: tags
    }
    this.images.insert(image, (err, newDoc) => {
      callback(newDoc._id);
    });
  }

  getPicture(pictureId, callback) {
    this.images.findOne({_id: pictureId}, (err, doc) => {
      callback(doc.content);
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
