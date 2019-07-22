import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

const Snackbar = props => {
  const classes = useStyles();
  const { verboseName, count } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar(`${props.verboseName} copied!`);
  };

  return (
    <CopyToClipboard text={verboseName}>
      <Chip
        avatar={<Avatar>{count}</Avatar>}
        label={verboseName}
        onClick={handleClick}
        className={classes.chip}
        color="secondary"
      />
    </CopyToClipboard>
  );
};

export default props => {
  return (
    <SnackbarProvider>
      <Snackbar {...props} />
    </SnackbarProvider>
  );
};
