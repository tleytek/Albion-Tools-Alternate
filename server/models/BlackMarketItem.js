const mongoose = require('mongoose');

const { Schema } = mongoose;

const craftresourceSchema = new Schema({
  uniquename: String,
  count: String,
  verboseName: String
});

const craftingrequirementsSchema = new Schema({
  silver: String,
  time: String,
  craftingfocus: String,
  craftresource: [craftresourceSchema]
});

const blackMarketItemSchema = new Schema({
  craftingrequirements: { craftingrequirementsSchema },
  tier: String,
  uniquename: String,
  verboseName: String,
  fameEarned: Number,
  itemValue: Number
});

const BlackMarketItem = mongoose.model('BlackMarketItem', blackMarketItemSchema);

module.exports = BlackMarketItem;
