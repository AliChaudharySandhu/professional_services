import mongoose from 'mongoose'
import crypto from 'crypto'
const ContactSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: 'First Name is required'
  },
  lname: {
    type: String,
    trim: true,
  },
  // name: {
  //   fname:{type: String, trim: true, required: 'requires'},
  //   lname: {type: String, trim: true, required: 'requires'}
  // },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  phone_no: {
    type: String,
    trim: true,
    required: 'Phone no is required'
  },
  description: {
    type: String,
    trim: true,
    required: 'Submit the reason'
  },
  
 
},
{
    timestamps: true
  },
)


export default mongoose.model('Contact', ContactSchema)
