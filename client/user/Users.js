import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ArrowForward from 'material-ui-icons/ArrowForward'
import Person from 'material-ui-icons/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 5,
    
  }),
  root:{
    padding: '5% 0 10%',
    display: 'flex',
    justifyContent: 'center'
  },
  paper:{
    maxWidth: '600px',
    minWidth: '600px',
    padding: '10px 10px 20px'
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    color: theme.palette.openTitle
  }
})

class Users extends Component {
  state = {
      users: []
  }

  componentDidMount() {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({users: data})
      }
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={4}>
          <Typography type="title" className={classes.title}>
            All Users
          </Typography>
          <List dense>
          {this.state.users.map((item, i) => {
            return <Link to={"/admin/user/" + item._id} key={i}>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>
                            <Person/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.type}/>
                        <ListItemSecondaryAction>
                        <IconButton>
                            <ArrowForward/>
                        </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                  </Link>
                })
              }
          </List>
        </Paper>
      </div>
      
    )
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users)
