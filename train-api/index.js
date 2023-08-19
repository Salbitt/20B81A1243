const express = require('express')
const mongoose = require('mongoose')
const app= express()
const trains=[
    {
        companyName : "Anja",
        rollNo :"1",
        ownerName:"Ram",
        ownerEmail:"ram@gmail.com",
        accesscode:"KIHLjn"
    },
    {
        companyName : "Rathri",
        rollNo :"2",
        ownerName:"Ricky",
        ownerEmail:"rick@gmail.com",
        accesscode:"ANhbs"
    }
]

const accesscodes = [
    {
        companyName:"Anja",
        rollNo:"1",
        accesscode:"KIHLjn"
    },
    {
        companyName:"Prati",
        rollNo:"2",
        accesscode:"Ansks"
    },
    {
        companyName:"Rathri",
        rollNo:"2",
        accesscode:"ANhbs"
    }
]
app.use(express.json())
app.listen(5501,()=>{
    console.log('Running')
})

app.post('/train/register',async(req,res)=>{
   const company = req.body.companyName;
   const roll = req.body.rollNo;
   const access = req.body.accesscode;

   const registerCode = {companyName:''+company,rollNo:''+roll,accesscode:''+access}
    
   if(accesscodes.includes(registerCode))
   {
    res.send('All done')
   }
   else{
    res.send(registerCode+' '+'Access denied')
   }
})



app.post('/train-display',async(req,res)=>{
    res.send('req.body')
})