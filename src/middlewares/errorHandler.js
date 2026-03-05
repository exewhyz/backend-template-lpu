import { sendResponse } from "../utils/response.js";
import config from "../config/index.js"

const globalErrorHandler = (err,req, res, next)=>{
    const statusCode = err.statusCode || 500;
    return sendResponse(res, {
        status: statusCode,
        success : true,
        message : err.message || "Internal Server Error",
        error : config.nodeEnv === "development" ? err.stack : undefined,
    })
}

export default globalErrorHandler;