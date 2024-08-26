import mongoose, { Schema } from "mongoose";
const orgSchema = new Schema(
    {
        companyName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)
export const Org = mongoose.model("Org",orgSchema)