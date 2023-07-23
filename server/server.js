const express = require("express");
const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require("./router/auth"))
app.listen(5000,(req,res)=>
{
    console.log("hellow")
})