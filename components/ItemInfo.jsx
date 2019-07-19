import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import moment from 'moment';
import clsx from 'clsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextInput from './TextInput';

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
  const { EquipmentItem, ItemPrice, ResourcePrices, onResourcePriceChange } = props;
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
        />
      </Grid>

      <Grid container item>
        <AppBar position="relative" square={false}>
          <Toolbar color="primary" variant="dense">
            Crafting Materials
          </Toolbar>
        </AppBar>
      </Grid>

      {ResourcePrices &&
        EquipmentItem.craftingrequirements.craftresource.map((el, index) => {
          const { verboseName, uniquename } = el;
          return (
            <Grid
              container
              item
              justify="space-between"
              alignItems="center"
              key={uniquename}
              className={classes.dense}
            >
              <img
                src={`https://gameinfo.albiononline.com/api/gameinfo/items/${el.uniquename}`}
                alt="Item"
                style={{ width: '75px', height: '75px' }}
              />
              <Grid container item xs direction="column">
                {/* <Chip /> */}
                <CopyToClipboard text={verboseName}>
                  <Typography variant="p">{verboseName}</Typography>
                </CopyToClipboard>
              </Grid>
              <Grid container item xs direction="column">
                <TextInput
                  label="Market Price (ea)"
                  value={ResourcePrices[index].sell_price_min}
                  variant="outlined"
                  margin="dense"
                  onChange={({ target }) => onResourcePriceChange(target.id, target.value)}
                  id={index}
                  helperText={moment.parseZone(ResourcePrices[index].sell_price_min_date).fromNow()}
                />
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
};
export default ItemInfo;
