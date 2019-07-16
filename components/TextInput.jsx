import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const TextInput = props => {
  const classes = useStyles();
  const { name, onTextInputChange } = props;

  const handleChange = name => event => {
    onTextInputChange(name, event.target.value);
  };

  return (
    <form className={classes.container}>
      <TextField {...props} className={classes.textField} onChange={handleChange(name)} />
    </form>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
