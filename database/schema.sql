
DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
\c reviews;

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  productId INTEGER PRIMARY KEY,
  productName VARCHAR ( 255 ) NOT NULL,
  imgUrl VARCHAR ( 255 ) NOT NULL,
  fit VARCHAR ( 255 ),
  activities VARCHAR ( 255 ),
  avgRating INTEGER,
  ratingCount INTEGER
);

\COPY products (productId, productName, imgUrl, fit, activities, avgRating, ratingCount) FROM '/Users/thomas/Documents/HackReactor/sdc/reviews/products.csv' DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  reviewId BIGSERIAL PRIMARY KEY,
  productId INTEGER,
  rating INTEGER,
  recommended BOOLEAN,
  title VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  body TEXT,
  size VARCHAR ( 255 ),
  fit VARCHAR ( 255 ),
  height VARCHAR ( 255 ),
  casualWear BOOLEAN,
  climbing BOOLEAN,
  yoga BOOLEAN,
  fishing BOOLEAN,
  hiking BOOLEAN,
  biking BOOLEAN,
  snowWear BOOLEAN,
  surfing BOOLEAN,
  work BOOLEAN,
  createdAt TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY(productId) REFERENCES products(productId)
);

\COPY reviews (productId, rating, recommended, title, author, body, size, fit, height, casualWear, climbing, yoga, fishing, hiking, biking, snowWear, surfing, work) FROM '/Users/thomas/Documents/HackReactor/sdc/reviews/reviews.csv' DELIMITER ',' CSV HEADER;