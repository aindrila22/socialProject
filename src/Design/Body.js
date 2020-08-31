
        import React from 'react';
        import { makeStyles } from '@material-ui/core/styles';
     
        import Card from '@material-ui/core/Card';
        import CardHeader from '@material-ui/core/CardHeader';
        import CardMedia from '@material-ui/core/CardMedia';
        import CardContent from '@material-ui/core/CardContent';
        import CardActions from '@material-ui/core/CardActions';
        import StarBorderIcon from '@material-ui/icons/StarBorder';
        import Avatar from '@material-ui/core/Avatar';
        import IconButton from '@material-ui/core/IconButton';
        import Typography from '@material-ui/core/Typography';
        import { red } from '@material-ui/core/colors';
        import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
        import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
        import ShareIcon from '@material-ui/icons/Share';

        import MoreVertIcon from '@material-ui/icons/MoreVert';
        
        const useStyles = makeStyles((theme) => ({
          root: {
            maxWidth: 800,
             boxShadow:"5px 12px 20px 5px #D2D2CD",
          },
          media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
         
          avatar: {
            backgroundColor: red[500],
          },
        }));
        
        export default function RecipeReviewCard() {
          const classes = useStyles();
        
        
      
        
          return (
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </IconButton> 
                <IconButton aria-label="add to mood">
                < SentimentSatisfiedAltIcon/>
              </IconButton>
              <IconButton aria-label="add to mood">
              <StarBorderIcon />
            </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
           
              </CardActions>
            
            </Card>
          );
        }
        
 