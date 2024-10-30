import mongoose from "mongoose";
import "dotenv/config";

let cachedConnection = null;

const connectDB = async () => {
 

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
   
    console.log("Database Connected");
  
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    
  }
};

export default connectDB;
