const db = require('../index.js');

const getProductInfo = (id, cb) => {
  db.query('SELECT * FROM products WHERE productid = $1', [id])
    .then((response) => cb(null, response.rows[0]))
    .catch((error) => cb(error, null));
};

// complete if time allows:

// const deleteProduct = (id, cb) => {
// };

module.exports = {
  getProductInfo,
};
