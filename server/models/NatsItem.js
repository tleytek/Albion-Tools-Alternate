const mongoose = require('mongoose');

const { Schema } = mongoose;

const natsItemSchema = new Schema(
  {
    Id: Number,
    ItemTypeId: String,
    LocationId: Number,
    QualityLevel: Number,
    EnchantmentLevel: Number,
    UnitPriceSilver: Number,
    Amount: Number,
    AuctionType: String,
    Expires: String,
    ItemGroupTypeId: String
    // expire_at: { type: Date, default: Date.now, expires: 86400, required: true }
  },
  { timestamps: true }
);

natsItemSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 86400 });

const NatsItem = mongoose.model('NatsItem', natsItemSchema);

module.exports = NatsItem;
