import express from "express";
import { registerOrg } from "../controller/org.controller.js";
import { Router } from "express";
const router = Router()
const orgRegister = router.post('/registerorg',registerOrg)
export{
    orgRegister
}