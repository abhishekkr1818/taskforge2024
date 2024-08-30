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
app.get('/',(req,res)=>{
     res.render('homePage')
})
app.get('/loginuser',(req,res)=>{
    res.render('user.login.page.ejs')
})
app.get('/loginorg',(req,res)=>{
    res.render('org.login.page.ejs')
})
app.get('/homeuser',(req,res)=>{
    res.render('user.home.page.ejs')
})
app.get('/homeorg',(req,res)=>{
    res.render('org.home.page.ejs')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export { app };