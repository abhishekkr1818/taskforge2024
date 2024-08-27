import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
import userRoute from "./routes/user.route.js";
import orgRoute from "./routes/org.route.js";
dotenv.config(); 
connectDB(); 
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', orgRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

export { app };
