import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getItemData } from '../lib/api';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1em 0',
  },
}));

const ItemDisplay = ({ fullItemName, isLoading }) => {
  const classes = useStyles();

  const itemDetail = <div>Item Detail</div>;

  const costDetail = <div>Cost Detail</div>;

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid container item md={12} lg={6}>
        <Grid item xs>
          <Typography>ItemDetail</Typography>
          <Typography variant="h3">item</Typography>
        </Grid>

        <img src={`https://gameinfo.albiononline.com/api/gameinfo/items/${fullItemName}`} />
        {itemDetail}
      </Grid>
      <Grid container justify="center" item md={12} lg={6}>
        {costDetail}
      </Grid>
    </Grid>
  );
};

export default ItemDisplay;
