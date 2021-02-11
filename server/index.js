/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3003;

const help = require('./helpers/shapers.js');
const reviews = require('../database/controllers/reviewsControllers.js');
const products = require('../database/controllers/productsControllers.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// raw review information
app.get('/api/rawReviews/:productid', (req, res) => {
  const id = req.params.productid;
  reviews.getProductReviews(id, (error, response) => {
    if (error) {
      console.log(error, 'an error occured');
    } else {
      res.status(200).send(response);
    }
  });
});

// formatted review information
app.get('/api/reviews/:productid', (req, res) => {
  const id = req.params.productid;
  reviews.getProductReviews(id, (error, response) => {
    if (error) {
      console.log(error, 'an error occured');
    } else {
      const formattedReviews = response.map((review) => help.shapeReview(review));
      res.status(200).send(formattedReviews);
    }
  });
});

// raw product information
app.get('/api/rawProducts/:productid', (req, res) => {
  const id = req.params.productid;
  products.getProductInfo(id, (error, response) => {
    if (error) {
      console.log(error, 'an error occurred');
    } else {
      res.status(200).send(response);
    }
  });
});

// formatted product information
app.get('/api/products/:productid', (req, res) => {
  const id = req.params.productid;
  products.getProductInfo(id, (error, response) => {
    if (error) {
      console.log(error, 'an error occurred');
    } else {
      const shapedProduct = help.shapeProduct(response);
      res.status(200).send(shapedProduct);
    }
  });
});

// default response matching legacy response shape
app.get('/productreviews', (req, res) => {
  const randomId = Math.ceil(Math.random() * 10000000);
  reviews.getProductReviews(randomId, (error, response) => {
    if (error) {
      console.log(`error fetching reviews for product #${randomId}`);
    } else {
      const productReviews = response.map((item) => help.shapeReview(item));
      products.getProductInfo(randomId, (error2, response2) => {
        if (error2) {
          console.log(`error fetching product #${randomId}`);
        } else {
          const formattedProduct = help.shapeProduct(response2, productReviews);
          res.status(200).send([formattedProduct]);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Reviews component is listening on ${PORT}`);
});
