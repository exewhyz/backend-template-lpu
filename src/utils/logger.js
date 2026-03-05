import { createLogger, format, transports} from "winston";
import config from "../config/index.js"

const { combine, timestamp, printf, errors,colorize,json } = format;

const logFormat = printf(({level, message, timestamp, stack})=>{
    return stack
    ? `${timestamp} [${level}]: ${message} - ${stack}`
    : `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
    level: "info",
    format : combine(
        timestamp(),
        errors( {stack : true }),
        config.nodeEnv === "development"
        ? combine(colorize(), logFormat)
        : json()
    ),
    transports : [
        new transports.Console(),
        new transports.File({ filename : "logs/error.log", level : "error" }),
        new transports.File({ filename: "logs/combined.log" })
    ]

})
export default logger;