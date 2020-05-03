import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
import crypto from 'crypto'
import async from 'async'
import path from 'path'

const signin = (req, res) => {
  User.findOne({
    "email": req.body.email
  }, (err, user) => {

    if (err || !user)
      return res.status('401').json({
        error: "User not found"
      })

    if (!user.authenticate(req.body.password)) {
      return res.status('401').send({
        error: "Email and password don't match."
      })
    }

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expire: new Date() + 9999
    })

    return res.json({
      token,
      user: {_id: user._id, name: user.name, email: user.email, seller: user.seller, type: user.type, status: user.status, phone_no: user.phone_no}
    })

  })
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

var hbs = require('nodemailer-express-handlebars'),
    email = process.env.MAILER_EMAIL_ID || 'gpsprofessionalservices@gmail.com',
    pass = process.env.MAILER_PASSWORD || 'Professional123',
    nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
  auth: {
    user: email,
    pass: pass
  },
  tls: {
      rejectUnauthorized: false
  }
});


//-------------------- Forgot Password and Node Mailer ----------------//

const forgotpass = function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({
        email: req.body.email
      }).exec(function(err, user) {
        if (user) {
          done(err, user);
          console.log('user found')
        } else {
          done('User not found.');
          console.log('user not found');
        }
      });
    },
    function(user, done) {
      // create the random token
      crypto.randomBytes(20, function(err, buffer) {
        var token = buffer.toString('hex');
        done(err, user, token);
        console.log('token created');
      });
    },
    function(user, token, done) {
      User.findByIdAndUpdate({ _id: user._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, {new: true, upsert: true }).exec(function(err, new_user) {
        done(err, token, new_user);
        console.log('fn exe');
      });
    },
    function(token, user, done) {
      var data = {
        to: user.email,
        from: email,
        subject: 'Password help has arrived!',
        
        html: `<h3>Hello ${user.name}</h3><p>Please click on the link to reset your password</p><div><p>${'http://localhost:3000/reset_password?token=' + token}</p></div>`,
      };

      smtpTransport.sendMail(data, function(err) {
        if (!err) {
          console.log(err)
          return res.json({ message: 'Kindly check your email for further instructions' });
        } else {
          console.log(err)
          return done(err);
        }
      });
    }
  ], function(err) {
    return res.status(422).json({ message: err });
  });
};
//  /**
//    * Reset password
// */

const resetpass =  function(req, res, next) {
  User.findOne({
    reset_password_token: req.body.token,
    reset_password_expires: {
      $gt: Date.now()
    }
  }).exec(function(err, user) {
    if (!err && user) {
      if (req.body.newPassword === req.body.verifyPassword) {
        user.hash_password = req.body.newPassword;
        user.reset_password_token = undefined;
        user.reset_password_expires = undefined;
        user.save(function(err) {
          if (err) {
            return res.status(422).send({
              message: err
            });
          } else {
            var data = {
              to: user.email,
              from: email,
              subject: 'Password Reset Confirmation',
              html: `<h3>Dear ${user.name}</h3><p>Your password has been successfully rest, you can now login with your new password.</p><br /> <p>Cheers!</p>`              
            };

            smtpTransport.sendMail(data, function(err) {
              if (!err) {
                return res.json({ message: 'Password reset' });
              } else {
                return done(err);
              }
            });
          }
        });
      } else {
        return res.status(422).send({
          message: 'Passwords do not match'
        });
      }
    } else {
      return res.status(400).send({
        message: 'Password reset token is invalid or has expired.'
      });
    }
  });
};


export default {
  signin,
  signout,
  forgotpass,
  resetpass,
  requireSignin,
  hasAuthorization
}
