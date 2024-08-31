import { Router } from "express";
import {jobPosting} from "../controller/job.controller.js"
const router = Router();
router.post('/jobposting',jobPosting)
export default router