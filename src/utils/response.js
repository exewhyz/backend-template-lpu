export const sendResponse = (res, options) => {
    const {
        status = 200,
        success = true,
        message = "success",
        data = null,
        error = null,
        stack = null,
    } = options;

    const response = {
        success,
        message,
    };
    if (data !== null) response.data = data;
    if (!success && error !== null) response.error = error;
    if (stack !== null) response.stack = stack;

    return res.status(status).json(response);
};
