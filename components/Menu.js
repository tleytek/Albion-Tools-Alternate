import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const NavMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Open drawer"
        onClick={handleClick}>
        <MenuIcon />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <Link href="/BlackMarketCrafting">
            <MenuItem onClick={handleClose}>BlackMarketCrafting</MenuItem>
          </Link>
        </Menu>
      </IconButton>
    </React.Fragment>
  );
};

export default NavMenu;
