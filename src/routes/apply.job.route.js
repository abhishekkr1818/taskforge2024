import { applytoJob } from "../controller/apply.js";
import { Router } from "express";
const router = Router()
router.post('/applyjob',applytoJob)
export default router