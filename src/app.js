import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRoute from "./routes/user.route.js";
import orgRoute from "./routes/org.route.js";
dotenv.config();
connectDB();
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', orgRoute);
app.get('/',async(req,res)=>{
    await res.render('homePage')
})
app.get('/loginuser',(req,res)=>{
    //res.send("Login Page")
    console.log("Login Page");
    
})
app.get('/loginorg',(req,res)=>{
    console.log("Render Organization");
    
})
app.get('/',(req,res)=>{
    console.log("Render Home Page");
    
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export { app };