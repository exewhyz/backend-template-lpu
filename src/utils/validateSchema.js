import { sendResponse } from "./response.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errorMessage = JSON.parse(result.error.message)
            return sendResponse(res, {
                success: result.success,
                status: 400,
                message: errorMessage.map((error) => error.message).join(", "),
                error: errorMessage,
            });
        }
        req.body = result.data;
        next();
    };
};
