import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed"  style={{backgroundColor:"green"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="green" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="green">
            git users
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
