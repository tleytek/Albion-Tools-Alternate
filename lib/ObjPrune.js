import _ from 'lodash';
import axios from 'axios';
import cheerio from 'cheerio';

export const ObjPrune = (obj, enchantment) => {
  let newObj;
  switch (enchantment) {
    case '@0':
      newObj = _.pick(obj, ['craftingrequirements', 'tier', 'uniquename']);
      // console.log(newObj);
      cheerioScrape(newObj.uniquename);
      break;
    case '@1':
      newObj = _.pick(obj, ['enchantments', 'tier', 'uniquename']);
      cheerioScrape(newObj.uniquename, enchantment);
      break;
  }

  return newObj;
};

const cheerioScrape = (id, enchantment) => {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://www.albiononline2d.com/en/item/id/${id}`)
    .then(res => {
      const $ = cheerio.load(res.data);

      const ItemValue = $('td')
        .filter(function() {
          return (
            $(this)
              .text()
              .indexOf('Item Value') > -1
          );
        })
        .next()
        .text();
      console.log(ItemValue);
    });
};
