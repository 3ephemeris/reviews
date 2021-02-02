const ProductReviews = require('../../database/Product');

module.exports = {
  getAll(req, res) {
    ProductReviews.find()
      .then((r) => {
        res.status(200).send(r);
      }).catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getReviews(req, res) {
    ProductReviews.find()
      .then((r) => {
        const { reviews } = r[0];
        res.status(200).send(reviews);
      }).catch((err) => {
        res.status(500).send(err);
      });
  },
};
