import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import Typography from 'material-ui/Typography'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'

import IconButton from 'material-ui/IconButton'
import ViewIcon from 'material-ui-icons/Visibility'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'left',
    padding: '0 8px'
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    width: '100%'
  },
  tile: {
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    textAlign: 'left'
  },
  tileTitle: {
    fontSize:'1.1em',
    marginBottom:'5px',
    color:'rgb(189, 222, 219)',
    display:'block'
  },
  iconButton:{
    width: '30px'
  }
})
class Products extends Component {
  render() {
    const {classes, width} = this.props

    let columns = width === 'sm' || width === 'md'  ? 2 : 3;
    return (
      <div className={classes.root}>
      {this.props.products.length > 0 ?
        (<div className={classes.container}>
          <GridList cellHeight={200} className={classes.gridList} cols ={columns}>
          {this.props.products.map((product, i) => (
            <GridListTile key={i} className={classes.tile}>
              <Link to={"/product/"+product._id}><img className={classes.image} src={'/api/product/image/'+product._id} alt={product.name} /></Link>
              <GridListTileBar className={classes.tileBar}
                title={<Link to={"/product/"+product._id} className={classes.tileTitle}>{product.name}</Link>}
                subtitle={<span>Rs. {product.price}</span>}
                actionIcon={
                  <span>
                    <Link to={'/product/'+product._id}>
                      <IconButton color="secondary" dense="dense">
                        <ViewIcon className={classes.iconButton} />
                      </IconButton>
                    </Link>
                    <AddToCart item={product}/>
                  </span>
                }
              />
            </GridListTile>
          ))}
        </GridList></div>) : this.props.searched && (<Typography type="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
      </div>)
  }
}
Products.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}

export default withStyles(styles)(withWidth()((Products)))
