import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("DB Connected");
};

export default ConnectDB;
