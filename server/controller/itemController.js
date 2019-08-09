const db = require('../models');

module.exports = {
  async itemPrice(req, res) {
    const { city, auctionType } = req.params;
    const { itemArr } = req.query;

    try {
      const data = await db.NatsItem.find({
        ItemTypeId: { $in: itemArr },
        LocationId: city,
        AuctionType: auctionType
      });
      return res.json(data);
    } catch (error) {
      return res.json('Please update me!');
    }
  },

  async itemData(req, res) {
    const { id } = req.params;

    try {
      const data = await db.BlackMarketItem.find({ uniquename: id });
      return res.json(data);
    } catch (error) {
      return res.send('Please update me!');
    }
  }
};
