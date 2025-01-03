const mongos = require("mongos")
const express = require("express")

const app = express()

app.get((req,res)=>{
    res.status("200", {
        message:"get reward"
    })  

})
app.post((req,res)=>{
    res.status("200", {
        message:"post reward"
    }) 
})
app.delete((req,res)=>{
    res.status("200", {
        message:"delete reward"
    }) 
})

module.exports = award

