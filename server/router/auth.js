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
})
module.exports = router;