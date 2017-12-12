const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bri:bri@ds044667.mlab.com:44667/fambly');

const database = mongoose.connection;

database.once('open', () => {
  console.log(`Connected to MongoDB: ${database.host}: ${database.port}`);
});

database.on('error', (err) => {
  console.error(`Database error:\n ${err}`);
});