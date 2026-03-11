import { sendResponse } from "../utils/response.js";
import config from "../config/index.js"
import logger from "../utils/logger.js";

const globalErrorHandler = (err,req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    //LOG ERROR
    if(statusCode === 500){
        logger.error(err)
    }else{
        logger.warn(message)
    }
    
    return sendResponse(res, {
        status: statusCode,
        success : false,
        message,
        error : err.errors,
        ...(config.nodeEnv === "development" && { stack : err.stack })
    })
}

export default globalErrorHandler;