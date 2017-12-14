const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {useMongoClient: true});

const database = mongoose.connection;

database.once('open', () => {
  console.log(`Connected to MongoDB: ${database.host}: ${database.port}`);
});

database.on('error', (err) => {
  console.error(`Database error:\n ${err}`);
});