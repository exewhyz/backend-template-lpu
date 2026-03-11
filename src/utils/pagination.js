const getPagination = (req) => {
    const p = parseInt(req.query.page) || 1;
    const l = parseInt(req.query.limit) || 10;
    const page = Math.max(p, 1);
    const limit = Math.max(l, 1);

    const skip = (page - 1) * limit;
    return { page, limit, skip };
};
export default getPagination;
