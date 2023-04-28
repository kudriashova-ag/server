const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://kudriashovaag:cZA25lOiEHucgIVg@cluster0.ab16ifu.mongodb.net/mern')
  .catch(e => console.error('Failed connect to DB', e.message));


const db = mongoose.connection;

module.exports = db;