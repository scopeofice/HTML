const express=require('express');
const app=express();

const path=require('path');

const m=require('./fun_10');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'index_10.html'));
});

app.get('/submit-form',function(req,resp){
    const num1=parseInt(req.query.num1);
        var ans=m.primenumber(num1);
        resp.send(`${num1} is ${ans}`);
});

app.listen(3012,function(){
    console.log("server 3012");
})