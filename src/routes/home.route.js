// routes/home.route.js
import { Router } from "express";

const router = Router();

const homeroute =router.get('/', (req, res) => {
    res.json({
        message: "Welcome to our homepage. Please register to continue."
    });
});

export{
    homeroute
}
