import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const mongoose = require("mongoose");'
const connectDB = async () => {
  console.log(process.env.DATABASE_URL);
  // const databaseUrl ="mongodb+srv://saadsrabon2:U0G6XgCV67tjU4Ez@cluster0.dqirosk.mongodb.net/ecommerce?retryWrites=true&w=majority";
  const databaseUrl = process.env.MONGO_URI;
  console.log(databaseUrl)
  mongoose
    .connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database Successfully Connected!");
    })
    .catch((err) => {
      console.log("Database Connection Error. Error: ", err);
    });
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.underline.bold);
//     process.exit(1);
//   }
// };

// export default connectDB;
