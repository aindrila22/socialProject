import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import  OutlinedButtons from './Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    top:20,
    margin:"70px auto",
    boxShadow:"2px 3px 25px 3px rgb(95, 238, 238, 0.7)",
    padding:"10px"
  


    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2"className="name">
        <strong>Sign-In first!</strong>
      </Typography><br/><br/><br/><br/>
        <Typography >
        <input type="text" placeholder="Email Address"/>
      </Typography><br/><br/>
      <Typography >
        <input type="text" placeholder="Password"/>
      </Typography><br/><br/><br/>
        
       
        </CardContent>
      </CardActionArea>
      <CardActions className="button" >
       < OutlinedButtons/>
      </CardActions>
      <Link to="/signup"><strong>Don't Have An Account?</strong></Link>
    </Card>
  );
}
