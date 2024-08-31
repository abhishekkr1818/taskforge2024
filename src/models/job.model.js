import mongoose, { Schema } from "mongoose";
const jobSchema = new Schema(
    {
        jobTitle:{
            type:String,
            required:true
        },
        domain:{
            type:String,
            required:true
        },
        experience:{
            type:String,
        },
        budget:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
{timestamps:true}
)
export const Job = mongoose.model('Job',jobSchema)