import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";
import getPagination from "../utils/pagination.js";
import paginate from "../utils/paginate.js";
import User from "../models/user.js";

import { generateToken, verifyPassword } from "../utils/authUtils.js";

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw new AppError("Invalid Credentials", 401);
    }
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
        throw new AppError("Invalid Credentials", 401);
    }
    const payload = {
        id: user._id,
    };
    const token = generateToken(payload);

    return sendResponse(res, {
        message: "User fetched Successfully",
        data: token,
    });
});

// http://localhost:6000/api/v1/auth/users?page=1&limit=10
export const getUsers = asyncHandler(async (req, res) => {
    const pages = getPagination(req);
    const users = await paginate(User, {}, pages);
    sendResponse(res, {
        message: "Fetched Users Successfully",
        data: users,
    });
});
