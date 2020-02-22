const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://dimitris:bmlK3nJTanCwybOp@cluster0-xfgig.mongodb.net/test?retryWrites=true&w=majority";
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
