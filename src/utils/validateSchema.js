import AppError from "./appError.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const issues = result.error.issues;
            const errors = issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            }));
            return next(new AppError("Validation Failed", 400, errors));
        }
        req.body = result.data;
        next();
    };
};