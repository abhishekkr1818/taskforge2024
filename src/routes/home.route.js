import express from "express";
import {app} from "../app.js"
import { orgRegistrationRoute } from "./org.route.js"
import { userRegistrationRoute } from "./user.route.js"
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(userRegistrationRoute)
app.use(orgRegistrationRoute)
const homeRoute =app.use('/',(req,res)=>{
    res.send("Home Page")
})

export{
    homeRoute,
    
}