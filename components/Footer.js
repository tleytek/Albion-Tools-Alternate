import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>&copy; {new Date().getFullYear()}</footer>;
};

export default Footer;
