import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({}));

const TextInput = props => {
  const classes = useStyles();

  return (
    // <div className={classes.container} noValidate autoComplete="off">
    <TextField {...props} />
    // </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
