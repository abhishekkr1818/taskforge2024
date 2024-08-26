import { registerUser } from "../controller/user.controller.js";
import { Router } from "express";
import express from "express"
const router = express.Router();
const userRegister = router.post('/registeruser', registerUser)
export{
    userRegister
}