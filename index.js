const express = require('express');
const app =  express();
const port =process.env.PORT || 8080;
const path = require('path')
app.listen(port,()=>{console.log('port started at 8080 :) ')})
app.get('',(req,res)=>{res.sendFile(path.join(__dirname,"testPackages.json"))})
app.get('*',(req,res)=>{res.send("<h1>oops didn't found your request! </h1>")})
