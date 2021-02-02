const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    unique: true,
    dropDups: true,
  },
  imgUrl: String,
  rating: Number,
  ratingCount: Number,
  fit: String,
  activites: String,
  reviews: [{
    productName: String,
    rating: Number,
    title: String,
    author: String,
    imageUrl: String,
    body: String,
    productInfo: {
      size: String,
      fit: String,
      Height: String,
    },
    properties: [String],
  }],
},
{
  timestamps: true,
});

const Product = mongoose.model('ProductReview', productSchema);

module.exports = Product;
