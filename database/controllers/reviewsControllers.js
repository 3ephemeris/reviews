const db = require('../index.js');

const getProductReviews = (id, cb) => {
  db.query('SELECT * FROM reviews WHERE productid = $1', [id])
    .then((results) => {
      cb(null, results.rows);
    })
    .catch((error) => cb(error, null));
};

// // implement if time allows:
// const addReview = (review) => {
//   // db query for adding review

// };

// const deleteReview = (reviewId) => {
//   // db query that deletes a review
// };

module.exports = {
  getProductReviews,
  // addReview,
  // deleteReview,
};
