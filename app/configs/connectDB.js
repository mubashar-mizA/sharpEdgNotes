import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to the database.");
      return;
    }

    if (!process.env.DB_URL) {
      throw new Error("Missing DB_URL in environment variables");
    }

    const DB_OPT = {
      dbName: "NotesDB",
    };

    await mongoose.connect(process.env.DB_URL, DB_OPT);
    console.log(`✅ Successfully connected to ${DB_OPT.dbName}`);
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    process.exit(1); // Optional: exits the process if DB connection fails
  }
};

export default ConnectDB;
