import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        throw new ApiError(400, "Both fields must be filled");
    }

    const checkUser = await User.findOne({ email });
    
    if (!checkUser) {
        throw new ApiError(401, "Invalid email or password.");
    }

    const isMatch = await bcrypt.compare(password, checkUser.password);
    
    if (!isMatch) {
        throw new ApiError(401, "Invalid login credentials.");
    }

    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
        message: "Login Successful",
        token
    });
    
   
});
export{
    loginUser,
    registerUser
}
