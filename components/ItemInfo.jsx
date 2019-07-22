import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, AppBar, Toolbar } from '@material-ui/core';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SnackbarProvider } from 'notistack';
import TextInput from './TextInput';
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

  const onEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      calculateProfit();
    }
  };

  return (
    <div className={classes.container}>
      <CopyToClipboard text={EquipmentItem.verboseName}>
        <Typography variant="h4">{EquipmentItem.verboseName}</Typography>
      </CopyToClipboard>
      <Grid container item alignItems="center">
        <img
          src={`https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${
            EquipmentItem.uniquename
          }`}
          alt="Item"
          style={{ width: '150px', height: '150px' }}
        />
        <TextInput
          className={classes.textField}
          label="Black Market Price (ea)"
          id="ItemPrice"
          value={ItemPrice.buy_price_max}
          variant="outlined"
          onChange={({ target }) => onResourcePriceChange(target.id, target.value)}
          helperText={moment.parseZone(ItemPrice.buy_price_min_date).fromNow()}
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
          EquipmentItem.craftingrequirements.craftresource.map((el, index) => {
            const { verboseName, uniquename, count } = el;
            return (
              <Grid
                container
                item
                justify="space-between"
                alignItems="center"
                key={uniquename}
                className={classes.dense}
              >
                <Grid container item xs justify="flex-start" alignItems="center">
                  <img
                    src={`https://gameinfo.albiononline.com/api/gameinfo/items/${el.uniquename}`}
                    alt="Item"
                    style={{ width: '75px', height: '75px' }}
                  />
                  <Snackbar count={count} verboseName={verboseName} />
                </Grid>
                <Grid container item xs={4}>
                  <TextInput
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
export default ItemInfo;
