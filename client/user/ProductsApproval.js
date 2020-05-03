import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import Card, {CardMedia} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ArrowForward from 'material-ui-icons/ArrowForward'
import Person from 'material-ui-icons/Person'
import {Link} from 'react-router-dom'
import {listProducts,updateProductStatus} from './api-user.js'
import auth from './../auth/auth-helper'
import { ExitToApp } from 'material-ui-icons';
import { SelectField } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle
  }
})

class ProductsApproval extends Component {
  state = {
      products: []
  }

  componentDidMount() {
    listProducts().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({products: data})
      }
    })
  }
  updateProductStatus = (event) => {
    var value = event.target.value;
    var values = value.split("-");
  
    const jwt = auth.isAuthenticated()

    const product = {
      status: values[0]
    }

    updateProductStatus({
      userId: values[1]
    }, {
      t: jwt.token
    }, product).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        location.reload();
      }
    })
  }

  render() {
    const {classes} = this.props
    return (
      
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          All Products
        </Typography>
        <table id="customers">
  <tr>
    <th style={{backgroundColor: '#21d192'}}>Name</th>
    <th style={{backgroundColor: '#21d192'}}>Description</th>
    <th style={{backgroundColor: '#21d192'}}> Category</th>
    <th style={{backgroundColor: '#21d192'}}>City</th>
    <th style={{backgroundColor: '#21d192'}}>Price</th>
    <th style={{backgroundColor: '#21d192'}}>Image</th>
    <th style={{backgroundColor: '#21d192'}}>status</th>
  </tr>
  {this.state.products.map((item, i) => {
  return <tr>
    <td>{item.name}</td>
    <td>{item.description}</td>
    <td>{item.category}</td>
    <td>{item.city}</td>
    <td>{item.price}</td>
    <td>
    <ListItemAvatar>
                  <Avatar src={'/api/product/image/'+item._id+"?" + new Date().getTime()}/>
                </ListItemAvatar>
    </td>
    <td>
    {item.status == 'Rejected' &&
        <p style={{color: "red"}}>{item.status}</p>
      }
      {item.status == 'Approved' &&
        <p style={{color: "green"}}>{item.status}</p>
      }
      {item.status == 'Review' &&
        <p style={{color: "orange"}}>{item.status}</p>
      }
       &nbsp;
      <select name="status" value={item.status+'-'+item._id} onChange={this.updateProductStatus}>
        <option>Select</option>
        <option  value={'Approved-'+item._id}>Approved</option>
        <option value={'Rejected-'+item._id}>Rejected</option>
        <option value={'Review-'+item._id}>Review</option>
      </select>
      </td>
    
  </tr>
  })
}
</table>

      </Paper>
      
    )
  }
}

ProductsApproval.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductsApproval)
