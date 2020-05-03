import express from 'express'
import contactUsCtrl from '../controllers/contactUs.controller'

const router = express.Router()

router.route('/api/contacts/')
//   .get(contactUsCtrl.list)
  .post(contactUsCtrl)

// router.route('/api/users/:userId')
//   .get(authCtrl.requireSignin, userCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
// router.route('/api/stripe_auth/:userId')
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.stripe_auth, userCtrl.update)

// router.param('contactUsId', contactUsCtrl.contactUsByID)

export default router