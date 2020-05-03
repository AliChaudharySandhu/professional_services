import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import cart from '../cart/cart-helper'
import AccountCircle from 'material-ui-icons/AccountCircle'
import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import ExitToAppIcon from 'material-ui-icons/ExitToApp';
import { Grid } from 'material-ui';

const styles = theme => ({
  // container:{
  //   maxWidth: '1170px',
  //   minWidth: '1170px',
  //   margin: '0 auto',
  //   padding: '0 15px',
  // },
  logo:{
    width: '150px',
    marginBottom: '10px',
    backgroundColor: 'inherit',
    transition: 'none',
    '&:hover':{
      backgroundColor: 'inherit',
      
    }
  },
  iconRoot:{
    lineHeight: '1',
    
  },
  imageIcon:{
    width: '150px',
    height: '100%'
  },
  icon: {
    paddingRight: '4px',
    marginBottom: '2px'
  },
  buttonStyle:{
    color: '#21d192',
  },
  appbarBg:{
    backgroundColor: '#607d8b',
    position:'static'
  }
})

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#21d192'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#21d192'}
  else
    return {color: '#ffffff'}
}
class Menu extends Component{
  render(){
    const {classes, history} = this.props
    if(this.props.location.pathname == '/contact'){
      return null
    } 
    else{
      return(
        <AppBar className={classes.appbarBg}>
          <Toolbar>
            <Grid container>
              <Grid item xs={12}>
                <Link to="/">
                  <IconButton className={classes.logo} aria-label="Home" style={isActive(history, "/")}>
                    <span className={classes.iconRoot}>
                      <img className={classes.imageIcon} src={require('../assets/images/Main_logo.svg')} />
                    </span>
                    
                  </IconButton>
                  
                </Link>
                <Link to="/shops/all">
                  <Button style={isActive(history, "/shops/all")}>All Shops</Button>
                </Link>
                <Link to="/map">
                  <Button style={isActive(history, "/map")}>Map</Button>
                </Link>
                <Link to="/cart">
                  <Button style={isActive(history, "/cart")}>
                    Service Booking
                    <Badge color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
                      <CartIcon />
                    </Badge>
                  </Button>
                </Link> 
              </Grid>
                
            
              <Grid item xs={12} ><span style={{'float': 'right'}}>
              {
                !auth.isAuthenticated() && (<span>
                  <Link to="/signup">
                    <Button className={classes.buttonStyle} style={isActive(history, "/signup")}><PersonAddIcon className={classes.icon}/> Sign up
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button className={classes.buttonStyle} style={isActive(history, "/signin")}><PersonIcon className={classes.icon}/> Sign in
                    </Button>
                  </Link>
                </span>)
              }
              {
                auth.isAuthenticated() && (<span>
                  {auth.isAuthenticated().user.type==2 && (<Link to="/admin/users"><Button style={isPartActive(history, "/admin/users/")}>Users</Button></Link>)}
                  {auth.isAuthenticated().user.type==2 && (<Link to="/admin/categories"><Button style={isPartActive(history, "/admin/categories")}>Categories</Button></Link>)}
                  {auth.isAuthenticated().user.type==2 && (<Link to="/admin/shops/list"><Button style={isPartActive(history, "/admin/shops/list")}>Shops</Button></Link>)}
                  {auth.isAuthenticated().user.type==2 && (<Link to="/admin/products/approval"><Button style={isPartActive(history, "/admin/products/approval")}>Products</Button></Link>)}
                  {auth.isAuthenticated().user.seller && (<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
                  <Link to={"/user/" + auth.isAuthenticated().user._id}>
                    <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>Profile</Button>
                  </Link>
                  <Button color="inherit" onClick={() => {
                      auth.signout(() => history.push('/'))
                    }}><ExitToAppIcon /></Button>
                </span>)
              }
              </span></Grid>
            </Grid> 
          </Toolbar>
        </AppBar>
  
      )
    }
    
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withRouter(withStyles(styles)(Menu))




// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import {Link, withRouter} from 'react-router-dom';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import AccountCircle from 'material-ui-icons/AccountCircle'
// import Switch from 'material-ui/Switch';
// import {FormControlLabel} from 'material-ui/Form';
// import {FormGroup} from 'material-ui/Form';
// import {MenuItem} from 'material-ui/Menu';
// import Menu from 'material-ui/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// class MainMenu extends React.Component {
//   state = {
//     auth: true,
//     anchorEl: null,
//   };

//   handleChange = (event, checked) => {
//     this.setState({ auth: checked });
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className={classes.root}>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//             }
//             label={auth ? 'Logout' : 'Login'}
//           />
//         </FormGroup>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" className={classes.flex}>
//               Photos
//             </Typography>
//             {auth && (
//               <div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : null}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// MainMenu.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default  withRouter(withStyles(styles)(MainMenu));
