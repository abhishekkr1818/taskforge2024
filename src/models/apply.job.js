import mongoose, { Schema } from "mongoose";
const applyJobSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        expectedRate:{
            type:Number,
            required:true
        },
        githublink:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)
export const Apply = mongoose.model('Apply',applyJobSchema)