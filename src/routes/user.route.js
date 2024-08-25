import { registerUser } from "../controller/user.controller.js";
import { Router } from "express";
import express from "express"
const router = express.Router();
router.post('/register', registerUser)
export default router;