import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link, withRouter} from 'react-router-dom'
import { Grid } from 'material-ui'

const styles = {
  root:{
    padding: '30px' 
  },
  container: {
    width: '100%',
    boxShadow: 'none',
    marginTop: '60px',
    marginBottom: '-100px',
  },
  CardContent: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  cardinner:{
    padding: '30px 0 10px',
    height: '460px',
    backgroundColor: '#f6f6f6',
    width: '300px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 6px rgba(57,73,76,.35)'
  }
  
};

function Flow(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

        <Grid container  className={classes.container}>
          <Grid item lg={3} md={4} sm={6} xs={12}
            className={classes.CardContent}
            
            // image= {require ("./../assets/images/banner4.jpg")}
            // title="Professoional Services"
          >
            <div className={classes.cardinner}>
              <div style={{position: 'absolute', top: '9%', width: '80px', height: '80px', backgroundColor: '#fcfcfc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{color: '#fff', color: '#607d8b', fontSize: '50px', fontWeight: '600'}}>1</p>
              </div>
              <div style={{position: 'absolute', top: '30%',left: '0',right: '0', transform: 'translateX(70%)', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}>
                <img style={{width: '100%', borderRadius: '50%'}} src={require ("./../assets/images/search.jpeg")}></img>
              </div>
              <div style={{position: 'absolute', top: '57%', left: '0',right: '0', transform: 'translateX(0)', padding:'15px', height: '120px', width: '270px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <h3 style={{fontFamily: 'Helvitica',color: '#607d8b', fontSize: '24px', marginBottom: '0' }}>Get Start</h3>
                <p style={{fontFamily: 'Helvitica, sans-serif',color: '#423d3d', fontSize: '16px',lineHeight:'20px', margin: '10px 20px' }}>Search the local services you want from our quality list of services</p>
              </div>
            </div>
            

          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}
            className={classes.CardContent}
            
            // image= {require ("./../assets/images/banner4.jpg")}
            // title="Professoional Services"
          >
            <div className={classes.cardinner}>
              <div style={{position: 'absolute', top: '9%', width: '80px', height: '80px', backgroundColor: '#fcfcfc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{color: '#fff', color: '#607d8b', fontSize: '50px', fontWeight: '600',}}>2</p>
              </div>
              <div style={{position: 'absolute', top: '30%',left: '0',right: '0', transform: 'translateX(70%)', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}>
                <img style={{width: '100%', borderRadius: '50%'}} src={require ("./../assets/images/register.jpeg")}></img>
              </div>
              <div style={{position: 'absolute', top: '57%', left: '0',right: '0', transform: 'translateX(0)', padding:'15px', height: '120px', width: '270px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <h3 style={{fontFamily: 'Helvitica',color: '#607d8b', fontSize: '24px', marginBottom: '0' }}>Register</h3>
                <p style={{fontFamily: 'Helvitica, sans-serif',color: '#423d3d', fontSize: '16px',lineHeight:'20px', margin: '10px 20px' }}>Register with us to get our premium services from service providers</p>
              </div>
            </div>
            

          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}
            className={classes.CardContent}
            
            // image= {require ("./../assets/images/banner4.jpg")}
            // title="Professoional Services"
          >
            <div className={classes.cardinner}>
              <div style={{position: 'absolute', top: '9%', width: '80px', height: '80px', backgroundColor: '#fcfcfc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{color: '#fff', color: '#607d8b', fontSize: '50px', fontWeight: '600',}}>3</p>
              </div>
              <div style={{position: 'absolute', top: '30%',left: '0',right: '0', transform: 'translateX(70%)', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}>
                <img style={{width: '100%', borderRadius: '50%'}} src={require ("./../assets/images/getservice.jpeg")}></img>
              </div>
              <div style={{position: 'absolute', top: '57%', left: '0',right: '0', transform: 'translateX(0)', padding:'15px', height: '120px', width: '270px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <h3 style={{fontFamily: 'Helvitica',color: '#607d8b', fontSize: '24px', marginBottom: '0' }}>Get Service</h3>
                <p style={{fontFamily: 'Helvitica, sans-serif',color: '#423d3d', fontSize: '16px',lineHeight:'20px', margin: '10px 20px'}}>Get our quality services with professional services providers</p>
              </div>
            </div>
            

          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}
            className={classes.CardContent}
            
            // image= {require ("./../assets/images/banner4.jpg")}
            // title="Professoional Services"
          >
            <div className={classes.cardinner}>
              <div style={{position: 'absolute', top: '9%', width: '80px', height: '80px', backgroundColor: '#fcfcfc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{color: '#fff', color: '#607d8b', fontSize: '50px', fontWeight: '600',}}>4</p>
              </div>
              <div style={{position: 'absolute', top: '30%',left: '0',right: '0', transform: 'translateX(70%)', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}>
                <img style={{width: '100%', borderRadius: '50%'}} src={require ("./../assets/images/payment.jpeg")}></img>
              </div>
              <div style={{position: 'absolute', top: '57%', left: '0',right: '0', transform: 'translateX(0)', padding:'15px', height: '120px', width: '270px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <h3 style={{fontFamily: 'Helvitica',color: '#607d8b', fontSize: '24px', marginBottom: '0' }}>Payment</h3>
                <p style={{fontFamily: 'Helvitica, sans-serif',color: '#423d3d', fontSize: '16px',lineHeight:'20px', margin: '10px 20px'}}>Pay the service providers and get the services you want from them</p>
              </div>
            </div>
            

          </Grid>
        </Grid>

    </div>
  );
}

Flow.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Flow))