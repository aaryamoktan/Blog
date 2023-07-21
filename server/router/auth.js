const express = require("express")

const router = express.Router();
const User = require("../database/model")

router.get("/",(req,res)=>
{
    res.send("welcome to my home every body")
})
router.post("/registration",(Req,res)=>
{
    const  {username,email,password} = req.body;
    if(!username || !email || !password)
    {
        res.status(400).json(Error ="plz fill the form")
    }
    else{
        const find = User.findOne({email:email})
        if(find)
        {
            res.status(400).json(Error = "email already exit")
        }
        else{

        }
    }
})
router.post("login",(req,res)=>
{
    const {email,password} = req.body;
    if( !email || !password)
    {
        res.status(400).json(Error ="plz fill the form")
    }
    else{
        const find = User.findOne({email:email})
        if(find)
        {
           if(find.password === password)
           {
            console.log("welcome to my world");
           }
           else{
            res.status(400).json(Error = "plz enter correct password")
           }
        }
        else{
            res.status(400).json(Error="input email in not exit")
        }
    }

})
module.exports = router;