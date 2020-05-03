import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
  .post(authCtrl.signin)
router.route('/auth/signout')
  .get(authCtrl.signout)
router.route('/auth/signin/:forgot-password')
  .post(authCtrl.forgotpass)
router.route('/auth/reset-password/')
  .put(authCtrl.resetpass)

export default router
