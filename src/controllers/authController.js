import AppError from '../utils/appError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/response.js';

export const login = asyncHandler(async ()=>{
    const user = await User.findById(req.params.id);
    if(!user){
        throw new AppError("User not Found", 404);
    }
    return sendResponse(res, {
        message: "User fetched Successfully",
        data :user
    })
})

// export const login = (req, res) => {
//     try {
//     } catch (error) { }
// }