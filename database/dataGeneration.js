/* eslint-disable no-console */
const fs = require('fs');
const faker = require('faker');

// ~~ Helper Functions ~~
const rng = (high, low = 0) => (Math.floor(Math.random() * (high - low + 1)) + low);
const getBoolean = () => (Math.random() < 0.5);
const getRecommendation = () => (Math.random() < 0.9);
const randVal = (array) => array[rng(array.length - 1)];
const getActivitiesString = () => {
  const uses = ['Casual-wear', 'Climbing', 'Yoga', 'Fishing', 'Hiking', 'Biking', 'Snow-Wear', 'Surfing', 'Work'];
  let useCount = rng(4, 1);
  let result = '';
  while (useCount > 0) {
    result += ` ${uses.splice(rng(uses.length - 1), 1)}`;
    useCount -= 1;
  }
  return result.slice(1);
};

const writeProducts = fs.createWriteStream('medProducts.csv');
writeProducts.write('productId,productName,imgUrl,fit,activities,avgRating,ratingCount\n', 'utf8');

const writeReviews = fs.createWriteStream('medReviews.csv');
writeReviews.write('productId,rating,recommended,title,author,body,size,fit,height,casualWear,climbing,yoga,fishing,hiking,biking,snowWear,surfing,work\n');

const createNProducts = (writer, n, encoding, cb) => {
  let i = n;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const productId = id;
      const productName = faker.commerce.productName();
      const imgUrl = 'https://loremflickr.com/320/240/sweater';
      const fit = 'True to Size';
      const activites = getActivitiesString();
      const avgRating = 0;
      const ratingCount = 0;
      const data = `${productId},${productName},${imgUrl},${fit},${activites},${avgRating},${ratingCount}\n`;
      if (i % (n / 10) === 0) {
        console.log(`${n / 10} more products written!`);
      }
      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

const createNReviews = (writer, n, encoding, cb) => {
  const reviewGenerator = (productId) => {
    let numberOfReviews = rng(30, 2);
    const reviews = [];
    while (numberOfReviews > 0) {
      reviews.push({
        productId,
        rating: rng(5, 1),
        recommended: getRecommendation(),
        title: faker.commerce.productAdjective(),
        author: faker.name.firstName(),
        body: (JSON.stringify(faker.commerce.productDescription())),
        size: randVal(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
        fit: randVal(['Loose', 'Tight', 'Good', 'Perfect']),
        height: randVal(['average', 'tall']),
        casualWear: getBoolean(),
        climbing: getBoolean(),
        yoga: getBoolean(),
        fishing: getBoolean(),
        hiking: getBoolean(),
        biking: getBoolean(),
        snowWear: getBoolean(),
        surfing: getBoolean(),
        work: getBoolean(),
      });
      numberOfReviews -= 1;
    }
    let output = '';
    reviews.forEach((review) => {
      output += `${review.productId},${review.rating},${review.recommended},${review.title},${review.author},${review.body},${review.size},${review.fit},${review.height},${review.casualWear},${review.climbing},${review.yoga},${review.fishing},${review.hiking},${review.biking},${review.snowWear},${review.surfing},${review.work}\n`;
    });
    return output;
  };

  let i = n;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = reviewGenerator(id);
      if (i % 1000000 === 0) {
        console.log('1000000 more sets of reviews written!');
      }
      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};
const createNRecords = (n) => {
  createNProducts(writeProducts, n, 'utf-8', () => {
    writeProducts.end();
  });
  createNReviews(writeReviews, n, 'utf-8', () => {
    writeReviews.end();
  });
};

createNRecords(1000000);
