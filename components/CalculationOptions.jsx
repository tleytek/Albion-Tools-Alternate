import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(2)
  },
  textField: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const CalculationOptions = props => {
  const classes = useStyles();
  const { Tax, ReturnRate, FocusReturnRate, onInputChange, fetchPrices, calculateProfit } = props;

  const onEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      calculateProfit();
    }
  };

  return (
    <Grid container item alignItems="center" className={classes.container}>
      <Grid item xs>
        <TextField
          className={classes.textField}
          id="Tax"
          value={Tax}
          variant="outlined"
          label="Usage Tax"
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>
          }}
          onChange={({ target }) => onInputChange(target.id, target.value)}
          onKeyPress={onEnter}
        />
      </Grid>
      <Grid item xs>
        <TextField
          className={classes.textField}
          id="ReturnRate"
          value={ReturnRate}
          variant="outlined"
          label="Return Rate"
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>
          }}
          onChange={({ target }) => onInputChange(target.id, target.value)}
          onKeyPress={onEnter}
        />
      </Grid>
      <Grid item xs>
        <TextField
          className={classes.textField}
          id="FocusReturnRate"
          value={FocusReturnRate}
          variant="outlined"
          label="Focus Return Rate"
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
            readOnly: true
          }}
          onChange={({ target }) => onInputChange(target.id, target.value)}
          onKeyPress={onEnter}
        />
      </Grid>
      <Grid container item xs alignItems="stretch">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={fetchPrices}>
            Get Prices
          </Button>
          <Button variant="contained" color="secondary" onClick={calculateProfit}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CalculationOptions;
