const express = require('express')
const mongoose = require('mongoose')
const app= express()
const trains =     {
        name:"Rajdhani Express",
        id:"A12"
    }

app.listen(5501,()=>{
    console.log('Running')
})

app.get('/trains',(req,res)=>{
   
    res.send(trains.name+" "+trains.id)
    
})

app.post('/trains-list',(req,res))
{
    
}