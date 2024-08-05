import mongoose from "mongoose";
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL);

    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
