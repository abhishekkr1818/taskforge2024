import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, middleName, lastName, username, email, password, profilePicture } = req.body;

    if ([firstName, lastName, username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required to be filled");
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existedUser) {
        throw new ApiError(401, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        firstName,
        middleName,
        lastName,
        username,
        email,
        password: hashedPassword,
        profilePicture
    });
    console.log(newUser);
    
    return res.status(201).json(new ApiResponse(201, newUser, "Registered Successfully"));

});

export { registerUser };
