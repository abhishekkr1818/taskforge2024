import express from "express";
import ejs from "ejs"
const app = express();
const router = express.Router();
router.use(express.static('public'));
const loginRoutes =app.get('/login', (req, res) => {
    //console.log(req.body);
    //res.send('hell0o man')
    res.render("logpage.ejs")
    app.use(loginSuccess)
});
const loginSuccess = router.get('/home-page',(req,res)=>{
    res.send("<h1>Login SuccessFully</h1>")
})

export { 
    loginRoutes,
    loginSuccess
 };
