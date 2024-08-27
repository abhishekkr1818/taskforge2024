import express from "express";
import { Router } from "express";
import {loginUser, registerUser} from "../controller/user.controller.js"
const router = Router();
router.post('/login',loginUser)
router.post('/register',registerUser)

export default router