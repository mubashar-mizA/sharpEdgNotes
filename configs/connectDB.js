import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    const DB_OPT = {
      dbName: "NotesDB",
    };
    await mongoose.connect(process.env.DB_URL, DB_OPT);

    console.log(`Successfully connected to ${DB_OPT.dbName}`);
  } catch (error) {
    console.log("Err at connecting db =========<>", error);
  }
};
export default ConnectDB;
