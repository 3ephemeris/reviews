/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://admin:admin256@cluster0.auers.mongodb.net/fjordproject?retryWrites=true&w=majority';

const dbConnect = () => {
  mongoose.connect(mongoUri, ({
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
  }));
};

module.exports = dbConnect;
