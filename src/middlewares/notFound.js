import AppError from "../utils/appError.js";

const notFound = (req, _, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
};

export default notFound;
