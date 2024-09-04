import { Apply } from "../models/apply.job.js";
import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
const applytoJob = asyncHandler(async (req,res)=>{
    const {name,email,expectedRate,githublink}=req.body
    if(!name|| !email||!expectedRate || !githublink){
        throw new ApiError(404,"Please fill all fields")
    }
    /*
    const appliedBefore = await Apply.findOne({
        $or:[{name},{email}]
    })
    */
   const createApply = await Apply.create({
        name,email,expectedRate,githublink
   })
   console.log(createApply);
   
   return res.status(200).json(new ApiResponse(400,createApply,"Applied Succesfully"))
})
export{
    applytoJob
}