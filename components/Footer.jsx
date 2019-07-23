import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.footer.background,
    color: theme.palette.footer.color
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6">
        Data provided by 
        {' '}
        <a href="https://www.albion-online-data.com/">Albion Data</a>
      </Typography>
    </footer>
  );
};

export default Footer;
