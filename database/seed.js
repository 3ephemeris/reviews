/* eslint-disable no-console */
const faker = require('faker');
const mongoose = require('mongoose');
const dbConnect = require('./index.js');
const ProductReview = require('./Product.js');

dbConnect();

const sizeChart = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const fitChart = ['Loose', 'Tight', 'Good', 'Perfect'];
const heightChart = ['average', 'tall'];
const randVal = (array) => array[Math.floor(Math.random() * array.length)];

const randUse = () => {
  const properties = [];
  let i = 0;
  const uses = ['Casual-wear', 'Climbing', 'Yoga', 'Fishing', 'Hiking', 'Biking', 'Snow-Wear', 'Surfing', 'Work', 'recommended'];
  const offSetBoolean = () => (Math.random() < 0.4);
  for (i; i < uses.length; i += 1) {
    if (offSetBoolean()) {
      properties.push(uses[i]);
    }
  }
  return properties;
};

const fakeData = new Array(100).fill(null).map(() => (
  {
    rating: (Math.ceil(Math.random() * (5 - 1) + 1)),
    title: faker.commerce.productAdjective(),
    author: faker.name.firstName(),
    body: faker.commerce.productDescription(),
    productInfo: {
      size: randVal(sizeChart),
      fit: randVal(fitChart),
      height: randVal(heightChart),
    },
    properties: randUse(),
  }));

const sampleProduct = [{
  productName: 'Men\'s Insulated Fjord Flannel Jacket',
  imgUrl: 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2b58c1e7/images/hi-res/27640_NVYB.jpg?sw=500&sh=500&sfrm=png&q=95&bgcolor=f6f6f6',
  rating: 4,
  ratingCount: fakeData.length,
  fit: 'True To Size',
  activities: 'Casual Wear, Work, Hiking',
  reviews: fakeData,
}];

ProductReview.create(sampleProduct)
  .then(() => mongoose.disconnect())
  .catch(console.log);
