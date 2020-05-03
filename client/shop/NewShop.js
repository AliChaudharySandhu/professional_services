import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import LocationSearching from 'material-ui-icons/LocationSearching'
import auth from './../auth/auth-helper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {create} from './api-shop.js'
import {Link, Redirect} from 'react-router-dom'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  },
  getlocationouter:{
    width: '55%',
    margin: '30px auto 8px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  getlocation:{
    fontSize: '12px',
    padding: '8px 6px',
    background: 'none',
    border: 'none',
    outline: 'none',
    transition: 'transform 300ms ease-in, color 300ms ease-in',
    "&:hover":{
      cursor: 'pointer',
      color: '#21d192',
      transform: 'scale(1.2, 1.2)',
      transition: 'transform 300ms ease-in, color 300ms ease-in',
    }

  }
})

class NewShop extends Component {
  constructor(props){
    super(props)
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  };
  state = {
    name: '',
    description: '',
    image: '',
    redirect: false,
    error: '',
    active: false,
    latitude: '',
    longitude: '',
    useraddress: '',
  }
    
    
 
  getLocation() {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates)
      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates(position){
  
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      active: true,
    })
    this.reverseGeocodeCoordinates();
  }
  reverseGeocodeCoordinates (){
    fetch(`https://eu1.locationiq.com/v1/reverse.php?key=3906114239fb7b&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`)
    .then(response=> response.json())
    .then(data=> this.setState({
      useraddress: data.display_name
    }))
    .catch(error => alert(error))
  }

  componentDidMount = () => {
    this.shopData = new FormData()
  }
  handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    
    this.shopData.set(name, value)
    this.setState({ [name]: value })
  }
  clickSubmit = () => {

    const jwt = auth.isAuthenticated()
    create({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, this.shopData).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        console.log(data)
        this.setState({error: '', redirect: true})
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/seller/shops'}/>)
    }
    const {classes} = this.props
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            New Shop
          </Typography>
          <br/>
          <input accept="image/*" onChange={this.handleChange('image')} className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <Button variant="raised" color="secondary" component="span">
              Upload Logo
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}>{this.state.image ? this.state.image.name : ''}</span><br/>
          <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="2"
            value={this.state.description}
            onChange={this.handleChange('description')}
            className={classes.textField}
            margin="normal"
          /><br/>
           
          <div className={classes.getlocationouter}>
            <button className={classes.getlocation} onClick={this.getLocation}><LocationSearching /></button>
            <TextField style={{display: 'none'}} id="latitude" name="latitude" value={this.state.latitude} onChange={this.handleChange(`latitude ${this.state.latitude}`)} />
            <TextField style={{display: 'none'}} id="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChange('longitude')} />
            <TextField disabled style={{width: '100%'}}placeholder="Click to get your location" value={this.state.useraddress} onChange={this.handleChange('address')}></TextField>
            
          </div>
          <br />
          {
            this.state.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {this.state.error}</Typography>)
          }

          {/* {
            this.state.latitude && this.state.longitude ?
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=
            ${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyC7HwS4ZRb7QPIfLGHyEMiRIiJuWGzTejs`}/>
            : null
          } */}
        </CardContent>
        <CardActions>
          <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
          <Link to='/seller/shops' className={classes.submit}><Button variant="raised">Cancel</Button></Link>
        </CardActions>
      </Card>
    </div>)
  }
}

NewShop.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewShop)
