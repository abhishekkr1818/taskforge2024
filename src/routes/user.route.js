import { Router } from "express";
import ejs from "ejs"
const router = Router()
const userRegistrationRoute = router.get('/userRegister',(req,res)=>{
    
    //res.send("Check")
})
/* For Backend data Observation
router.post('/userRegister', (req, res) => {
    const {firstName,lastName} = req.body
});
*/
export {
    userRegistrationRoute
}
