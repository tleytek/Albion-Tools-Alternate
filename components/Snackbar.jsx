import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  },
  avatar: {
    width: '32px',
    height: '32px',
    fontSize: '1rem',
    marginRight: '-4px',
    color: '#fff',
    backgroundColor: 'rgb(165, 59, 30)'
  }
}));

const Snackbar = props => {
  const classes = useStyles();
  const { verboseName, count } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar(`${verboseName} copied!`);
  };

  return (
    <CopyToClipboard text={verboseName}>
      <Chip
        avatar={<Avatar className={classes.avatar}>{count}</Avatar>}
        label={verboseName}
        onClick={handleClick}
        // className={classes.chip}
        color="secondary"
      />
    </CopyToClipboard>
  );
};

export default Snackbar;
