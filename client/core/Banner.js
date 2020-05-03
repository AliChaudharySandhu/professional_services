import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link, withRouter} from 'react-router-dom'

const styles = {
  card: {
    maxWidth: '100%',
    position: 'relative',
    boxShadow: 'none',
  },
  media: {
    height: '460px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxWidth: '100%',
  },
  button_alignment:{
      position: 'absolute',
      bottom: '0',
      left: '50%',
      right: '50%',
      width: '310px',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateX(-50%)',
       
  },
  button:{
    textTransform: 'capitalize !important',
    backgroundColor: 'rgba(96, 125, 139, 0.08)',
  },
  active:{
    backgroundColor: '#21d192',
    color: '#fff',

    '&:hover':{
      backgroundColor: '#1cb77f',
    }
  },
  alter_hover: {

    textTransform: 'capitalize !important',
    '&:hover':{
      color: '#21d192',
      backgroundColor: '#80808024'
    }
  }

  
};

function Banner(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} xs={12}>
      <CardMedia
        className={classes.media}
        
        image= {require ("./../assets/images/banner4.jpg")}
        title="Professoional Services"
      />
      {/* <CardContent >
        <Typography gutterBottom variant="headline" component="h2">
          Lizard
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent> */}
      <CardActions className={classes.button_alignment}>
        <Link to="/home">
          <Button className={`${classes.button} ${classes.active}`} size="large" color="primary">
            Get Started
          </Button>
        </Link>
        <Link to="/contact">
          <Button className={`${classes.button} ${classes.alter_hover}`} size="large" color="primary">
            Contact Us
          </Button>
        </Link>
        
        
      </CardActions>
    </Card>
  );
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Banner))