import { Job } from "../models/job.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js"
const jobPosting = asyncHandler(async(req,res)=>{
    const{jobTitle,domain,experience,budget,description} = req.body;
    const createdJob = await Job.create({
        jobTitle,domain,experience,budget,description
    })
    console.log(createdJob);
    
    return res.status(200).json(new ApiResponse(201,createdJob,"Job Posted Succefully"))


})
const findjobs = asyncHandler(async (req, res) => {
    const { title, domain } = req.query;

    const query = {};

    if (title) {
        query.jobTitle = { $regex: title, $options: 'i' };
    }

    if (domain) {
        query.domain = { $regex: domain, $options: 'i' };
    }

    const jobs = await Job.find(query);
    return res.status(200).json(new ApiResponse(200, jobs, "Jobs found sucess"));
});
export {
    jobPosting,
    findjobs
}