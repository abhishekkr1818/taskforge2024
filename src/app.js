import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config()
connectDB()
const app = express()
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
export{
    app
}