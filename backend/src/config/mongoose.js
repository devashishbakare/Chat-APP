const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("mongdo db has connected " + connect.connection.host);
  } catch (error) {
    console.log("something went wrong with db connect" + error.message);
    process.exit();
  }
};

module.exports = connectMongoDb;
