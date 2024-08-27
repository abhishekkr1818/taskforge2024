import { registerOrg ,loginOrg } from "../controller/org.controller.js";
import { Router } from "express";
const router = Router()
router.post('/login',loginOrg)
router.post('/register',registerOrg)
export default router