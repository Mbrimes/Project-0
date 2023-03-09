const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const dbs = require("../models");
const Role = dbs.role; 

const connectDB = async () => {
  // try {
  //   mongoose.set('strictQuery', true);
  //   await mongoose.connect(db, {
  //     useNewUrlParser: true,
  //   });

  //   console.log('MongoDB is Connected...');
  //   initial();
  // } catch (err) {
  //   console.error(err.message);
  //   process.exit(1);
  // };  

  db.mongoose.set('strictQuery', true);
db.mongoose
  .connect(db, {
    useNewUrlParser: true, 
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
};


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      }); 
    }
  });
};

module.exports = connectDB;
