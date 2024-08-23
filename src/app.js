import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.get("/home",(req,res)=>{
    res.send("testing");
    
})
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
export{
    app
}