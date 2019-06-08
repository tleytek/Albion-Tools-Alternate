import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormHelperLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ItemData from '../db/items';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  FormControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

export const RadioButtonsGroup = props => {
  const classes = useStyles();

  const renderList = (props.) => {

  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
    </div>
  );
};
