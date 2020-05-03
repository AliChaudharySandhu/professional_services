import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'
import Banner from './Banner'
import AllCategories from './AllCategories'
import Flow from './Flow'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    
  }
})

class Home extends Component {
  state={
    suggestionTitle: "Latest Services",
    suggestions: [],
    categories: []
  }
  componentDidMount = () => {
    listLatest().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({suggestions: data})
      }
    })
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({categories: data})
      }
    })
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.content}>
        <Banner />
        <AllCategories />
        <Flow />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
