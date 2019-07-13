import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const Input = props => {
  const classes = useStyles();

  // React.useEffect(() => {
  //   (async itemName =)
  // })

  return (
    <form className={classes.container}>
      <TextField label={props.name} value={props.price} margin="normal" variant="outlined" />
    </form>
  );
};

export default Input;
