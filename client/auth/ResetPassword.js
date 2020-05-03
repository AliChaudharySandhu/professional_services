import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {resetpass} from './api-auth.js'

const styles = theme => ({
    card: {
      maxWidth: 500,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing.unit * 20,
      marginBottom: theme.spacing.unit * 14,
      paddingBottom: theme.spacing.unit * 2
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing.unit * 2,
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
    },
    send: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
      },
})
  
class ResetPassword extends Component {
  state = {
    email: '',
    error: '',

}

//creating user object with name: value pair
clickSend = () => {
  const user = {
    email: this.state.email || undefined,
  }
 console.log(user) 

  resetpass(user).then((data) => {
    if (data.error) {
      this.setState({error: data.error})
      
    }
    else{
      this.setState({error: ''})
    }
    })
}
// setting the (name = event value) and updating the state object(with the same namme) i.e email == useremail@..com 
handleChange = name => event => {
  this.setState({[name]: event.target.value})
  console.log(name);
  console.log(event.target.value)
}
  
    render() {
      const {classes} = this.props
  
      return (

        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2" className={classes.title}>
             Reset your password
            </Typography>
            <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
            <br/> 
            {
              this.state.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}>error</Icon>
                {this.state.error}
              </Typography>)
            }
          </CardContent>
          <CardActions>
            <Button color="secondary" variant="raised" onClick={this.clickSend} className={classes.send}>Send Reset Email</Button>
          </CardActions>
        </Card>

      )
    }
}
  
ResetPassword.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(ResetPassword)








