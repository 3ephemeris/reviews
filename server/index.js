/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3003;

const dbConnect = require('../database/index.js');

dbConnect();

const productRoutes = require('./routes/productRoutes');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/productreviews', productRoutes);

app.listen(PORT, () => {
  console.log(`Reviews componnet is listening on ${PORT}`);
});
