import mongoose from 'mongoose'
import crypto from 'crypto'
const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
 
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String
  },

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

export default mongoose.model('Shop', ShopSchema)
