/* eslint-disable func-names */
require('dotenv').config();
const { MongoClient } = require('mongodb');
const assert = require('assert');
const BlackMarketItems = require('../BlackMarketItems.json');

// Connection URL
const url = process.env.MONGO_URI || 'mongodb://localhost:27017';

// Database Name
const dbName = 'albionDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log('Connected correctly to server');

  const db = client.db(dbName);

  // // Create Collection
  // createCapped(db, 'blackmarketitems');

  // Insert a multiple documents
  db.collection('blackmarketitems')
    .remove({})
    .insertMany(BlackMarketItems, function(err, r) {
      assert.equal(null, err);
      assert.equal(BlackMarketItems.length, r.insertedCount);
      console.log('Database Seeded');
      client.close();
    });
});

function createCapped(db, collectionName) {
  db.createCollection(collectionName, function(err, results) {
    console.log('Collection created.');
  });
}
