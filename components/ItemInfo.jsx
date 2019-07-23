import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import moment from 'moment';
import { SnackbarProvider } from 'notistack';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, AppBar, Toolbar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Snackbar from './Snackbar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    flexShrink: '1',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto'
  },
  dense: {
    marginTop: theme.spacing(1)
  }
}));

const ItemInfo = props => {
  const classes = useStyles();

  const {
    EquipmentItem,
    ItemPrice,
    ResourcePrices,
    onResourcePriceChange,
    calculateProfit
  } = props;

  const { verboseName, uniquename, craftingrequirements } = EquipmentItem;
  const onEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      calculateProfit();
    }
  };

  return (
    <div className={classes.container}>
      <CopyToClipboard text={verboseName}>
        <Typography variant="h4">{verboseName}</Typography>
      </CopyToClipboard>
      <Grid container item alignItems="center">
        <img
          src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${uniquename}`}
          alt="Item"
          style={{ width: '150px', height: '150px' }}
        />
        <TextField
          className={classes.textField}
          label="Black Market Price (ea)"
          id="ItemPrice"
          value={ItemPrice.buy_price_max}
          variant="outlined"
          onChange={({ target }) => onResourcePriceChange(target.id, target.value)}
          helperText={moment.parseZone(ItemPrice.buy_price_max_date).fromNow()}
          onKeyPress={onEnter}
        />
      </Grid>

      <Grid container item>
        <AppBar position="relative" square={false}>
          <Toolbar color="primary" variant="dense">
            Crafting Materials
          </Toolbar>
        </AppBar>
      </Grid>

      <SnackbarProvider maxSnack="1" transitionDuration={500} autoHideDuration="2000">
        {ResourcePrices &&
          craftingrequirements.craftresource.map((el, index) => {
            // eslint-disable-next-line no-shadow
            const { verboseName, uniquename, count } = el;
            return (
              <Grid container item xs={12} key={uniquename} className={classes.dense}>
                <Grid container item xs>
                  <img
                    src={`https://gameinfo.albiononline.com/api/gameinfo/items/${el.uniquename}`}
                    alt="Item"
                    style={{ width: '75px', height: '75px' }}
                  />
                </Grid>
                <Grid container item xs={6} alignItems="center">
                  <Snackbar count={count} verboseName={verboseName} />
                </Grid>

                <Grid container item xs={4}>
                  <TextField
                    className={classes.textField}
                    label="Market Price (ea)"
                    value={ResourcePrices[index].sell_price_min}
                    variant="outlined"
                    margin="dense"
                    onChange={({ target }) => onResourcePriceChange(target.id, target.value)}
                    id={index}
                    helperText={moment
                      .parseZone(ResourcePrices[index].sell_price_min_date)
                      .fromNow()}
                    onKeyPress={onEnter}
                  />
                </Grid>
              </Grid>
            );
          })}
      </SnackbarProvider>
    </div>
  );
};

ItemInfo.propTypes = {
  EquipmentItem: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    craftingrequirements: PropTypes.exact({
      craftingfocus: PropTypes.string.isRequired,
      craftresources: PropTypes.arrayOf(
        PropTypes.exact({
          count: PropTypes.string.isRequired,
          uniquename: PropTypes.string.isRequired,
          verboseName: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      silver: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    }).isRequired,
    fameEarned: PropTypes.number.isRequired,
    itemValue: PropTypes.number.isRequired,
    tier: PropTypes.string.isRequired,
    uniquename: PropTypes.string.isRequired,
    verboseName: PropTypes.string.isRequired
  }).isRequired,
  ItemPrice: PropTypes.exact({
    buy_price_max: PropTypes.number.isRequired,
    buy_price_max_date: PropTypes.string.isRequired,
    buy_price_min: PropTypes.number.isRequired,
    buy_price_min_date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    quality: PropTypes.number.isRequired,
    sell_price_max: PropTypes.number.isRequired,
    sell_price_max_date: PropTypes.string.isRequired,
    sell_price_min: PropTypes.number.isRequired,
    sell_price_min_date: PropTypes.string.isRequired
  }).isRequired,
  ResourcePrices: PropTypes.arrayOf(
    PropTypes.exact({
      buy_price_max: PropTypes.number.isRequired,
      buy_price_max_date: PropTypes.string.isRequired,
      buy_price_min: PropTypes.number.isRequired,
      buy_price_min_date: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      item_id: PropTypes.string.isRequired,
      quality: PropTypes.number.isRequired,
      sell_price_max: PropTypes.number.isRequired,
      sell_price_max_date: PropTypes.string.isRequired,
      sell_price_min: PropTypes.number.isRequired,
      sell_price_min_date: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ItemInfo;
