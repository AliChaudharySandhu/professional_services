import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import {Link, withRouter} from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home';
import MailIcon from 'material-ui-icons/Mail';
import CallIcon from 'material-ui-icons/Call';
import Card from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import { Grid } from 'material-ui'
import Divider from 'material-ui/Divider'


const styles = theme => ({
footer:{
    backgroundColor: '#607d8b',
    paddingBottom: '5px',
    
},
grid:{

},
grid_item:{
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',

    '& p, h2, h3, a':{
        color: '#fff !important',
        lineHeight: 1.8,
        fontFamily: 'Gotham SSm,Helvetica,Arial,sans-serif',
    },
    '& h3':{
        position: 'relative',
        textTransform: 'uppercase'
    },
    '& h3::after':{
        content: "' '",
        borderBottom: '#21d192 2px solid',
        width: '70px',
        height: '2px',
        position: 'absolute',
        bottom: '-5px',
        left: 0
    }
    
},
contact:{
    display: 'flex',
    alignItems: 'center',
    '& p, a':{
        margin: '5px 0'
    }
},
copyright:{
    color: '#fff !important',
        lineHeight: 1.8,
        fontFamily: 'Gotham SSm,Helvetica,Arial,sans-serif',
        textAlign: 'center',
        fontSize: '13px',

},
footerWrapper:{
    marginTop: 'calc(5% + 60px)',
    bottom: 0,
},
footerTopbar:{
    backgroundColor: '#21d192',
    padding: '25px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
},
footerTopbarP:{
    display: 'inline-flex',
    color: '#fff !important',
    lineHeight: '1.8',
    margin: '10px 0',
    fontFamily: 'Gotham SSm,Helvetica,Arial,sans-serif',
},
footerSocial:{
    width: '110px',
    display: 'inline-flex',
    justifyContent: 'space-between',
},
svgIcon:{
    width: '25px',
    height: '25px',
    fill: '#fff',
    opacity: '0.7',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
    '&:hover':{
        opacity: '1',
        transform: 'translateY(-4px)',
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
    }
},


})

class Footer extends Component{
    render(){
      const {classes} = this.props
      if(this.props.location.pathname == '/contact'){
        return null
      } 
      else{
      return(
        <div className={classes.footerWrapper}>
            <div>
                <Grid className={classes.footerTopbar}>
                    <p className={classes.footerTopbarP}>Get connected with Us on social networks!</p>
                    <div className={classes.footerSocial}>
                        <a href="https://www.facebook.com">
                            <svg className={classes.svgIcon} viewBox="0 0 512 512">
                                <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/>
                            
                            </svg>
                        </a>
                        <a href="https://www.twitter.com">
                            <svg className={classes.svgIcon} viewBox="0 0 512 512">
                            <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
                            M400.35,186.15c-2.55,117.3-76.5,198.9-188.7,204C165.75,392.7,132.6,377.4,102,359.55c33.15,5.101,76.5-7.649,99.45-28.05
                            c-33.15-2.55-53.55-20.4-63.75-48.45c10.2,2.55,20.4,0,28.05,0c-30.6-10.2-51-28.05-53.55-68.85c7.65,5.1,17.85,7.65,28.05,7.65
                            c-22.95-12.75-38.25-61.2-20.4-91.8c33.15,35.7,73.95,66.3,140.25,71.4c-17.85-71.4,79.051-109.65,117.301-61.2
                            c17.85-2.55,30.6-10.2,43.35-15.3c-5.1,17.85-15.3,28.05-28.05,38.25c12.75-2.55,25.5-5.1,35.7-10.2
                            C425.85,165.75,413.1,175.95,400.35,186.15z"/>                            
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com">
                            <svg className={classes.svgIcon} viewBox="0 0 512 512">
                            <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"/>                           
                            </svg>
                        </a>
                        
                    </div>
                </Grid>
            
            </div>
            <div className={classes.footer}>
                
                <Grid container  style={{display: 'flex', width: '100%', padding: '35px 30px 20px'}} margin={0}>
                    <Grid item xs={12} sm={6} md={4} lg={3}className={classes.grid_item} >
                        <h3 component="h2">Professional Services</h3>
                        <p style={{marginRight: '38px', textAlign: 'center'}}>Professional Services is the local services providing portal, helping you to get services faster and more efficiently.</p>
    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid_item}>
                        <h3>Popular Categories</h3>
                        <a href="#" style={{marginTop: '12px'}}>Plumbing</a>
                        <a href="#">Electrician</a>
                        <a href="#">Carpenting</a>
                        <a href="#">Painting</a>
    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid_item}>
                        <h3>Useful Links</h3>
                        <a href="/shops/all" style={{marginTop: '12px'}}>All Shops</a>
                        <a href="/cart">Services</a>
                        <a href="/map">Map</a>
    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid_item}>
                        <h3>Contact</h3>
                        <span className={classes.contact}>
                            <HomeIcon style={{color: '#fff', margin: '0 8px 0 0'}}/> 
                            <p>British Homes Islamabad</p>
                        
                        </span>
                        <span className={classes.contact}>
                            <CallIcon style={{color: '#fff', margin: '0 8px 0 0'}}/> 
                            <p>+92 301 2212570</p>
                        
                        </span>
                        <span className={classes.contact}>
                            <svg style={{color: '#fff', margin: '0 8px 3px 0'}} viewBox="0 0 512 512" width="25px" height="25px" fill="white">
                                <path d="m256 0c-140.609375 0-256 115.390625-256 256 0 46.40625 12.511719 91.582031 36.238281 131.105469l-36.238281 124.894531 124.894531-36.238281c39.523438 23.726562 84.699219 36.238281 131.105469 36.238281 140.609375 0 256-115.390625 256-256s-115.390625-256-256-256zm160.054688 364.167969-11.910157 11.910156c-16.851562 16.851563-55.605469 15.515625-80.507812 10.707031-82.800781-15.992187-179.335938-109.5625-197.953125-190.59375-9.21875-40.140625-4.128906-75.039062 9.183594-88.355468l11.910156-11.910157c6.574218-6.570312 17.253906-6.5625 23.820312 0l47.648438 47.652344c3.179687 3.179687 4.921875 7.394531 4.921875 11.90625s-1.742188 8.730469-4.921875 11.898437l-11.90625 11.921876c-13.125 13.15625-13.125 34.527343 0 47.652343l78.683594 77.648438c13.164062 13.164062 34.46875 13.179687 47.652343 0l11.910157-11.90625c6.148437-6.183594 17.632812-6.203125 23.832031 0l47.636719 47.636719c6.46875 6.441406 6.714843 17.113281 0 23.832031zm0 0"/>
                            </svg>
                            <p>+92 301 2212570</p>
                        
                        </span>
                        <span className={classes.contact}>
                            <MailIcon style={{color: '#fff', margin: '0 8px 0 0'}}/> 
                            <p>AliChaudhary100@gmail.com</p>
                        
                        </span>
                        
                        
    
                    </Grid>
                </Grid>
                <Divider style={{color: '#fff', height: '1px', backgroundColor: 'grey'}} />
                <Grid>
                    <p className={classes.copyright}>&copy; Copyright 2019 || GPS Based Professional Services</p>
                
                </Grid>
    
            </div>
        </div>

      )
      }
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withRouter(withStyles(styles)(Footer))