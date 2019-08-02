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

  if (LocationId === 3003 && QualityLevel === 1) {
    msg.updatedAt = Date.now();
    await db.NatsItem.findOneAndUpdate(blackMarketFilter, msg, {
      new: true,
      upsert: true
    });
  }
  if (LocationId === 3005) {
    msg.updatedAt = Date.now();
    await db.NatsItem.findOneAndUpdate(blackMarketFilter, msg, {
      new: true,
      upsert: true
    });
  }
};

module.exports = natsSubscribe;
