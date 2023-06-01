const express=require('express');
const app=express();

app.get('/',function(req,resp){
    resp.send('Welcome to Nodejs');
});

app.listen(5000,function(){
    console.log('server 5000');
});