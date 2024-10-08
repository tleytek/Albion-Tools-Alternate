import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(2)
  },
  textField: {
    flexGrow: 1,
    margin: theme.spacing(2)
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
  const { Tax, ReturnRate, FocusReturnRate, onInputChange, calculateProfit } = props;

  const onEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      calculateProfit();
    }
  };

  return (
    <Grid container item alignItems="center" className={classes.container}>
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
  );
};

CalculationOptions.propTypes = {
  Tax: PropTypes.string.isRequired,
  ReturnRate: PropTypes.string.isRequired,
  FocusReturnRate: PropTypes.string.isRequired
};

export default CalculationOptions;
