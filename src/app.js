import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import router from "./routes/user.route.js"; 
import {homeroute} from "./routes/home.route.js"
dotenv.config(); 
connectDB(); 

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/',homeroute)
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

export { app };
