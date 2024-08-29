import { Org } from "../models/organization.model.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
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
    console.log(newOrg);
    
    return res.status(201).json(new ApiResponse(201, newOrg, "Registered Successfully"));
});
const loginOrg = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new ApiError(400,"Emails and Password are required")
    }
    const orgCheck = await Org.findOne(
        {
            $or:[{email}]
        }
    )
    if(!orgCheck){
        throw new ApiError(401,"Email not registered")
    }
    const passwordCheck = bcrypt.compare(password,orgCheck.password)
    if(!passwordCheck){
        throw new ApiError(401,"Invalid Login Credentials")
    }
    const token  = jwt.sign({id: orgCheck._id},process.env.JWT_SECRET,{expiresIn:'1h'})
    res.status(200).json({
        message: "Login Successful",
        token
    });

})
export { 
    registerOrg,
    loginOrg
 };
