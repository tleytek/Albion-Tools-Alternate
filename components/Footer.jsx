import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography>
        &copy;
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
