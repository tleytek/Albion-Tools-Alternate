import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import moment from 'moment';
import { SnackbarProvider } from 'notistack';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, AppBar, Toolbar, FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Snackbar from './Snackbar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
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
    <React.Fragment className={classes.container}>
      <CopyToClipboard text={verboseName}>
        <Typography variant="h4">{verboseName}</Typography>
      </CopyToClipboard>
      <Grid container item justify="flex-start" alignItems="center">
        <Grid item xs={4}>
          <img
            src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${uniquename}`}
            alt="Item"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            // fullWidth
            className={classes.textField}
            label="Black Market Price (ea)"
            id="ItemPrice"
            // The order of the ItemPrice Object is critical
            value={Object.values(ItemPrice)[0]}
            variant="outlined"
            onChange={({ target }) => onResourcePriceChange(target.id, target.value)}
            helperText={`${Object.keys(ItemPrice)[0]} ${moment.parseZone(Object.values(ItemPrice)[1]).fromNow()}`}
            onKeyPress={onEnter}
          />
        </Grid>
      </Grid>
      <Grid item xs>
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
              <Grid
                container
                item
                xs={12}
                key={uniquename}
                className={classes.dense}
                alignItems="center"
              >
                <Grid container item xs={3}>
                  <img
                    src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${el.uniquename.replace(/@[0-9]/gi, '')}`}
                    alt="Item"
                    style={{ width: '75px', height: '75px' }}
                  />
                </Grid>
                <Grid container item xs={4}>
                  <Snackbar count={count} verboseName={verboseName} />
                </Grid>

                <Grid container item xs>
                  <TextField
                    fullWidth
                    className={classes.textField}
                    label="Market Price (ea)"
                    value={ResourcePrices[index].sell_price_min}
                    variant="outlined"
                    // margin="dense"
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
    </React.Fragment>
  );
};

ItemInfo.propTypes = {
  EquipmentItem: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    craftingrequirements: PropTypes.exact({
      craftingfocus: PropTypes.string.isRequired,
      craftresource: PropTypes.arrayOf(
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
