import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1em 0'
  }
}));

const ItemDisplay = props => {
  const classes = useStyles();

  const itemDetail = <div>Item Detail</div>;

  const costDetail = <div>Cost Detail</div>;

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid container item md={12} lg={6}>
        <Grid item xs>
          <Typography variant="p">{`${props.Tier}${props.Enchantment}`}</Typography>
          <Typography variant="h3">{`${props} ${props.ItemType}`}</Typography>
        </Grid>

        <img
          src={`https://gameinfo.albiononline.com/api/gameinfo/items/${props.ItemData.item_id}`}
        />
        {/* {console.log(props.ItemType)} */}
        {itemDetail}
      </Grid>
      <Grid container justify="center" item md={12} lg={6}>
        {costDetail}
      </Grid>
    </Grid>
  );
};

export default ItemDisplay;
