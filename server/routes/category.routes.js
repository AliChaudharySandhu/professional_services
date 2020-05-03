import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import categoryCtrl from '../controllers/category.controller'

const router = express.Router()

// router.route('api/allcategories/')
//   .get(categoryCtrl.listCategories)

router.route('/api/category')
  .get(categoryCtrl.list)

router.route('/api/category/:shopId')
  .get(categoryCtrl.read)

router.route('/api/category/by/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization,categoryCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, categoryCtrl.listByOwner)

router.route('/api/category/:shopId')
  .put(authCtrl.requireSignin, categoryCtrl.isOwner, categoryCtrl.update)
  .delete(authCtrl.requireSignin, categoryCtrl.isOwner, categoryCtrl.remove)

router.route('/api/category/logo/:shopId')
  .get(categoryCtrl.photo, categoryCtrl.defaultPhoto)

router.route('/api/category/defaultphoto')
  .get(categoryCtrl.defaultPhoto)

router.param('shopId', categoryCtrl.shopByID)
router.param('userId', userCtrl.userByID)

export default router
