import rateLimiter from "express-rate-limit";

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, //900000ms window time or interval time in ms
    max: 100, //maximum requests in that window or interval
    message: "Too many requesrs, try again later",
});

export default limiter;
