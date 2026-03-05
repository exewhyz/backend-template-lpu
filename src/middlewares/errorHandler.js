import { sendResponse } from "../utils/response.js";
import config from "../config/index.js"
import logger from "../utils/logger.js";

const globalErrorHandler = (err,req, res, next)=>{
    const statusCode = err.statusCode || 500;

    //LOG ERROR
    if(statusCode === 500){
        logger.error(err)
    }else{
        logger.warn(err.message)
    }

    return sendResponse(res, {
        status: statusCode,
        success : true,
        message : err.message || "Internal Server Error",
        error : config.nodeEnv === "development" ? err.stack : undefined,
    })
}

export default globalErrorHandler;