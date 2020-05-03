import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import {Link, withRouter} from 'react-router-dom'
import {list} from './api-core' 

const styles = {
  root: {
    maxWidth: '100%',
    position: 'relative',
    boxShadow: 'none',
  },
  categorySingle: {
    backgroundColor: '#f6f6f6',
    height: ' 250px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
    
  },
  catText:{
      position: 'absolute',
      top: '70%',
      fontSize: '24px',
      fontFamily: 'Serif'

  },
  catImage:{
      position: 'absolute',
      top: '15%',
      width: '100px',
      height: '100px'
  }
  
};

class AllCategories extends Component {
    // constructor(props){
    //     super(props);
    // }

    state ={
        categories: []
    }

    listCategories = () =>{
        list().then(data =>{
            if(data.error){
                console.log(data.error)
            }
            else {
                console.log(data)
                this.setState({
                    categories: data
                })
            }
        })
    }

    componentDidMount = () =>{
        this.listCategories()
    }

    render(){
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={24} style={{padding: '0 30px 0', marginTop: '50px', width: '100%', margin: '0 ', display: 'flex', justifyContent: 'center'}}>
                    {this.state.categories.map((category, i) =>{
                        return<Grid item key={i} lg={2} md={3} sm={4} xs={6}>
                                <Link to='#'>
                                    <div className={classes.categorySingle}>
                                        <img className={classes.catImage} src={'/api/category/logo/'+category._id+"?" + new Date().getTime()}></img>
                                        <Typography className={classes.catText} component="h2" color="primary" type="headline">{category.name}</Typography>
                                    </div>
                                
                                </Link>
                            </Grid>
                        
                    })}
                </Grid>
            </div>
            
          )
    }
  
}

AllCategories.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AllCategories)