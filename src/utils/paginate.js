const paginate = async (model, query, { page, limit, skip }) => {
    // const data = await model.find(query).skip(skip).limit(limit);
    // const total  = await model.countDocuments(query);

    const [data, total] = await Promise.all([
        model.find(query).skip(skip).limit(limit),
        model.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / limit);
    return {
        data,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
    };
};

export default paginate;
