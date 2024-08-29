import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        middleName:{
            type:String
        },
        lastName:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        profilePicture:{
            type:String,
        },
        passwordResetToken: {  
            type: String
        },
        passwordResetExpires: {  
            type: Date
        }
    },
    {timestamps:true}
)
export const User = mongoose.model("User",userSchema)