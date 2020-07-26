const db = require('./models');
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["msg"] }] */
const natsSubscribe = async msg => {
  const { ItemTypeId, LocationId, AuctionType, QualityLevel, EnchantmentLevel } = msg;
  const blackMarketFilter = {
    ItemTypeId,
    LocationId,
    AuctionType,
    QualityLevel,
    EnchantmentLevel
  };

  // LocationId 3003 is the blackmarket, and we only want the prices of quality level 1, the easiest for us to make
  if (LocationId === 3003 && QualityLevel === 1) {
    msg.updatedAt = Date.now();

    // For every request that comes in, ....
    await db.NatsItem.findOneAndUpdate(blackMarketFilter, msg, {
      new: true,
      upsert: true
    });
  }
  // LocationId 3005 is Caerleon
  if (LocationId === 3005) {
    msg.updatedAt = Date.now();
    await db.NatsItem.findOneAndUpdate(blackMarketFilter, msg, {
      new: true,
      upsert: true
    });
  }
};

module.exports = natsSubscribe;
