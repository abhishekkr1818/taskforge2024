import { Org } from "../models/organization.model.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerOrg = asyncHandler(async (req, res) => {
    const { companyName, email, password, username } = req.body;
    if ([companyName, email, password, username].some((field) => field?.trim() === "")) {
        throw new ApiError(404, "All fields are required");
    }
    const temusername = await Org.findOne({
        $or:[{username}]
    })
   
    const existedOrg = await Org.findOne({
        $or: [{ email }, { username }]
    });
    if (existedOrg) {
        throw new ApiError(404, "User Already Existed");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newOrg = await Org.create({
        companyName,
        email,
        password: hashedPassword,
        username
    });
    return res.status(201).json(new ApiResponse(201, newOrg, "Registered Successfully"));
});

export { registerOrg };
