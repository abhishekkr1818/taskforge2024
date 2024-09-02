import { Router } from "express";
import {jobPosting} from "../controller/job.controller.js"
import { findjobs } from "../controller/job.controller.js";
const router = Router();
router.post('/jobposting',jobPosting)
router.get('/', findjobs);
export default router