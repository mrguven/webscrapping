const express=require('express');
require('dotenv').config()
const app=express();

const port=process.env.PORT

app.listen(port,()=>{
    console.log('we listen port',port);
})

app.get('/',(req,res)=>{
    res.send('hello world')
})