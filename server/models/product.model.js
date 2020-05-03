import mongoose from 'mongoose'
import crypto from 'crypto'
const ProductSchema = new mongoose.Schema({
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
  category: {
    type: String
  },
  city: {
    type: String
  },
  phone_no: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'}
})

export default mongoose.model('Product', ProductSchema)
