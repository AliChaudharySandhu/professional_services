import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './core/Home'
import GetStarted from './core/GetStarted'
import Users from './user/Users'
import Signup from './user/Signup'
import AdminSignup from './user/AdminSignup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import AdminProfileView from './user/AdminProfileView'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import SimpleMap from './map/SimpleMap'
import MapContainer from './map/MapContainer'
import AdminCategory from './category/MyCategory'
import NewCategory from './category/NewCategory'
import EditCategory from './category/EditCategory'
import ProductsApproval from './user/ProductsApproval'
import ShopsList from './user/ShopsList'
import ContactUs from './core/ContactUs'
import ResetPassword from './auth/ResetPassword'
import NoMatch from './core/NoMatch'
import Footer from './core/Footer'
import ForgotPassword from './auth/ForgotPassword'
import AdminUserView from './user/AdminUserView'
//import UserList from './user/UsersList'

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={GetStarted}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/map" component={MapContainer}/>
        <Route exact path="/mapview" component={MapContainer}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/admin/signup" component={AdminSignup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signin/:forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/admin/user/:userId" component={AdminUserView}/>
        <Route path="/admin/user-profile/view/:userId" component={AdminProfileView}/>


        {/* <Route path="/user/adminview/:userId" component={ProfileAdminView}/> */}

        <Route path="/cart" component={Cart}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/shops/all" component={Shops}/>
        <Route path="/shops/:shopId" component={Shop}/>

        <Route path="/order/:orderId" component={Order}/>
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>

        <PrivateRoute path="/seller/shops" component={MyShops}/>
        <PrivateRoute path="/seller/shop/new" component={NewShop}/>
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>

        <Route path="/seller/stripe/connect" component={StripeConnect}/>
        <PrivateRoute path="/admin/categories" component={AdminCategory}/>
        <PrivateRoute path="/admin/category/new" component={NewCategory}/>
        <PrivateRoute path="/admin/category/edit/:shopId" component={EditCategory}/>
        <Route path="/admin/products/approval" component={ProductsApproval}/>
        <Route path="/admin/shops/list" component={ShopsList}/>

        <Route exact path="/contact" component={ContactUs} />
        <Route render={() => (<Redirect to="/" />)}/>
      </Switch>
      <Footer />
    </div>)
  }
}

export default MainRouter
