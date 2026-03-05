import mongoose from "mongoose";
import logger from "../utils/logger.js";
import config from "./index.js";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(config.mongoUrl);
        logger.info(`Database connected with host ${conn.connection.host}`)
    } catch (error) {
        logger.error("MongoDB connection failed");
        logger.error(error);
        process.exit(1);
    }
}

export default connectDB;