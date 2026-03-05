import { app } from "./app.js";
import config from "./config/index.js";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";

const startServer = async () => {
    try {
        await connectDB();
        app.listen(config.port, () => {
            logger.info(`Server started on http://localhost:${config.port}`);
        });
    } catch (error) {
        logger.error("Server failed to start");
        logger.error(error);
    }
};

startServer();
