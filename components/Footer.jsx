import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.footer.background,
    color: theme.palette.footer.color
  },
  icon: {
    marginLeft: theme.spacing(1),
    textDecoration: 'none'
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
        {' '}
| Source
        code:
      </Typography>
      <a
        href="https://github.com/tleytek/Albion-Tools-Alternate"
        className={classes.icon}
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa fa-github" style={{ fontSize: '28px' }} />
      </a>
    </footer>
  );
};

export default Footer;
