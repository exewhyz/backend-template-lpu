import { sendResponse } from "./response.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return sendResponse(res, {
                status: 400,
                message: result.error.message,
                error: result.error.errors,
            });
        }
        next();
    };
};
