import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const User = useSelector((state) => state.User)
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            {User.length > 0 ?
            <Link to='/Home' style={{ color: 'white' }}>Home</Link>
            :<Link to='/' style={{ color: 'white' }}>LogIn</Link>
            }
              
            </Typography>
            {User.length > 0 ?
            
              <Link to='/LogOut' style={{ color: 'white' }}>LogOut</Link>
              :<></>
            }
          </Toolbar>
        </AppBar>
      </div>
    </div >
  )
}