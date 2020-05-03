import React from 'react';
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import create from './api-contactUs.js'
import Divider from 'material-ui/Divider'
import { Grid } from 'material-ui';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import {Link} from 'react-router-dom'

const styles = theme => ({
contactWrapper :{
    backgroundImage: `url(${require('../assets/images/contactmain.svg')})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',  
    height: '125vh',
    backgroundRepeat: 'no-repeat' 

 },
 mycontainer:{
    // width: '1170px',
    // margin: '0 auto',
    // padding: '0 15px'
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica,sans-serif'
 },
 contactHeader:{
    padding: '20px 15px',
    textAlign: 'left',
 },
 logo:{
    width: '150px',
    height: '55px'
 },
 contactDes:{
     padding: '0 15px',
     margin: '80px 0 100px',
     flexDirection: 'column',
     display: 'flex',
     alignItems: 'center',
     '& h1': {
         fontSize: '40px',
         lineHeight: '50px',
         margin: '0 0 30px',
         fontFamily: 'Canela Deck Bold !important',
         color: '#21d192',
         fontWeight: '600',
         '& span':{
             color: '#fff',
             display: 'block'   
         }
     },
     '& p':{
        color: '#fff',
        fontSize: '14px',
        letterSpacing: '.8px',
        lineHeight: '21px',
        margin: '0 0 30px',
        display: 'block',
        fontFamily: 'inherit',

     },
     '& ul':{
         color: '#fff',
         fontSize: '14px',
         letterSpacing: '.8px',
         lineHeight: '22px',
         paddingLeft: '15px',
         margin: '0',
         fontFamily: 'inherit',
        '& li':{
            marginBottom: '10px'
        }
     }
 },
 textarea:{
    color: '#212121',
    fontSize: '16px',
    fontWeight: '400',
    padding: '4px 6px',
    letterSpacing: '.6px',
    lineHeight: '22px',
    margin: '45px 0 0',
    fontFamily: 'inherit',
    display: 'block',
    width: '454px',
    border: '1px solid rgba(0, 0, 0, 0.42)',
    resize: 'none',
    '&:focus':{
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #34515e !important',
    },
    '&:hover':{
        borderBottom: '2px solid #34515e !important',
    },
 },
 contactForm: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
 },
 card:{
    minWidth: '520px',
    maxWidth: '520px',

 },
 
 error: {
    verticalAlign: 'middle'
  },
 textField:{
    width: 454,
 },
 typography:{
     margin: '20px 0 0',
     textAlign: 'center !important',
     fontSize: '17px',
     lineHeight: '24px',
     fontWeight: '500',
     color: 'rgb(34, 34, 34)',
     fontFamily: 'inherit',
     color: '#222',
     fontStyle: 'oblique'
 },
 submit:{
    margin: 'auto',
    fontWeight: '500',
    marginBottom: theme.spacing.unit * 4
 }


})

class ContactUs extends React.Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        phone_no: '',
        description: '',
        open: false,
        handleclose: 'false',
        error: ''
    }
    handleClose = () => {
        this.setState({ open: false, handleclose: true });
     
    }
    
    
    handleChange = name => event => {
        this.setState({[name]: event.target.value})
      }

    clickSubmit = () => {
        const contactUs = {
          fname: this.state.fname || undefined,
          lname: this.state.lname || undefined,
          email: this.state.email || undefined,
          phone_no: this.state.phone_no || undefined,
          description: this.state.description || undefined,
        }
        create(contactUs).then((data) => {
          if (data.error) {
            this.setState({error: data.error})

          } else {
            this.setState({error: '', open: true})

          }
          
        })
    }
    render(){
        const white = "#fff";
        const {classes} = this.props;
        return(
            <div className={classes.contactWrapper}>
                <Grid >
                    <Grid container item xs={12} className={classes.contactHeader}><a href="/"><img className={classes.logo} src={require('../assets/images/Main_logo.svg')}/></a></Grid>
                    <Grid item md={12} className={classes.mycontainer}>
                        <Grid item md={6} sm={12} className={classes.contactDes}>
                            <div style={{minWidth: '520px', maxWidth: '520px'}}>
                                <h1> Get the Local Services
                                    <span>you need!</span>
                                </h1>
                                <p>Professional Services is the top local services providing app, helping you to provide services faster and more efficiently. Our services providing, Professional Services Platform, can help you:</p>
                                <ul>
                                    <li>Search for the desired services</li>
                                    <li>Register to request the desired services</li>
                                    <li>Do manual payments to service providers and enjoy the services</li>

                                </ul>

                            </div>
                            
                        </Grid>
                        <Grid item md={6} sm={12} className={classes.contactForm}>
                            <Card className={classes.card}>
                                <CardContent style={{width: '470px'}}>
                                    <Typography className={classes.typography}>For any complaint or query, fill this out and we’ll contact you, as soon as possible.</Typography>
                                    <TextField id="fname" name="fname" label="First Name" value={this.state.fname} onChange={this.handleChange('fname')} className={classes.textField}  margin="normal"/><br/>
                                    <TextField id="lname" name="lname" label="Last Name" value={this.state.lname} onChange={this.handleChange('lname')} className={classes.textField}  margin="normal"/><br/>
                                    <TextField id="email" name="email" type="email" label="Business Email" value={this.state.email} onChange={this.handleChange('email')} className={classes.textField} margin="normal"/><br/>
                                    <TextField id="phone_no" name="phone_no" label="Phone Number" value={this.state.phone_no} onChange={this.handleChange('phone_no')} className={classes.textField}  margin="normal"/><br/>

                                    <textarea className={classes.textarea} id="description" name="description" placeholder="Describe your request"
                                            rows="3"
                                            value={this.state.description}
                                            onChange={this.handleChange('description')}
                                            >
                                    
                                    </textarea>
                                    
                                        <Typography style={{margin: '0'}} component="p" color={this.state.error ? "error" : white }>
                                            <Icon color={this.state.error ? "error" : white } className={classes.error}>{this.state.error ? "error": ""}</Icon>
                                        {this.state.error}</Typography>
                                    
                                    <br />

                                </CardContent>
                                <CardActions>
                                 <Button color="secondary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                                <br />
                                </CardActions>

                            </Card>
                            <Dialog open={this.state.open} disableBackdropClick={false} onClose={this.handleClose}>
                                <DialogTitle>Request</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                   Your Request is registerd!
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions style={{justifyContent: 'center'}}>
                                <Link to="/">
                                    <Button color="secondary" autoFocus="autoFocus" variant="raised" style={{margin: "0px auto 18px"}}>
                                    Get to Home
                                    </Button>
                                </Link>
                                </DialogActions>
                            </Dialog>

                        </Grid>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
ContactUs.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(styles)(ContactUs);