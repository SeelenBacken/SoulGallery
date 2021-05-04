let Db = require('tingodb')().Db,
  assert = require('assert');

class TingoDB {
  constructor() {
    let db = new Db('/SoulGallery', {});

    var collection = db.collection("batch_document_insert_collection_safe");
// Insert a single document
    collection.insert([{hello:'world_safe1'}
      , {hello:'world_safe2'}], {w:1}, function(err, result) {
      assert.equal(null, err);
    });
  }

  getOne() {
    // Fetch the document
    collection.findOne({hello:'world_safe2'}, function(err, item) {
      return item;
    })
  }
}

exports.TingoDB = TingoDB;
