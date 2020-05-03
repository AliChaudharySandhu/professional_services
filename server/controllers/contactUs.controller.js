import Contact from '../models/contactUs.model'
import _ from 'lodash'
import errorHandler from '../helpers/dbErrorHandler'


const create = (req, res, next) => {
    const contact = new Contact(req.body)
    contact.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "You Complained Successfully!"
      })
    })
  }
  export default create