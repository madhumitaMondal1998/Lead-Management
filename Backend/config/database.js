const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    // const cleanUpNullUserIds = async () => {
    //   try {
    //     const result = await User.deleteMany({ userId: null });
    //     console.log(
    //       `Deleted ${result.deletedCount} documents with null userId`
    //     );
    //   } catch (error) {
    //     console.error(
    //       "Error deleting documents with null userId:",
    //       error.message
    //     );
    //   }
    // };

    // cleanUpNullUserIds();
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = connectDB;
