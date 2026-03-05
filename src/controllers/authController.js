import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";

import User from "../models/user.js";
import { generateToken, verifyPassword } from "../utils/authUtils.js";

export const login = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        throw new AppError("User not Found", 404);
    }
    // const isMatch = await verifyPassword(req.body.password, user.password);
    // if (!isMatch) {
    //     throw new AppError("Invalid Credentials", 401);
    // }
    // const payload = {
    //     id: user._id,
    // };
    // const token = generateToken(payload);
    // // set token in cookies
    // res.cookie("token", token, {
    //     httpOnly: true,
    //     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    //     sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    //     secure: process.env.NODE_ENV === "development" ? false : true,
    // })

    return sendResponse(res, {
        message: "User fetched Successfully",
        data: token,
    });
});
