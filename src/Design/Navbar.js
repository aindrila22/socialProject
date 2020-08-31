import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <Link to="/"className="nav">SOCIAL</Link>
          </Typography>
          <Link to="/" className="nav"><Button color="inherit">Home</Button></Link>
          <Link to="/signup" className="nav"><Button color="inherit">SignUp</Button></Link>
          <Link to="/profile" className="nav"><Button  color="inherit">Profile</Button></Link>
          <Link to="/signin" className="nav"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
