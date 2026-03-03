export const sendResponse = (
    res,
    options
) => {
    const {
        status = 200,
        success = true,
        message = "success",
        data = null,
        error = null,
    } = options;

    const response = {
        success,
        message
    }
    if(data !== null) response.data = data;
    if(error !== null) response.error = error;

    return res.status(status).json(response);
};
