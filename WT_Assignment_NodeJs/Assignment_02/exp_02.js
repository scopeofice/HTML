const express=require('express');
const app=express();

const path=require('path');

const m=require('./fun_02');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'index_02.html'));
});

app.get('/submit-form',function(req,resp){
    const num1=parseInt(req.query.num1);
    if(num1<5){
        var ans1=m.factorial(num1);
        resp.send(`Facorial of num1 is ${ans1}`);
    }else if(num1>5 && num1<10){
        var ans3=m.table(num1);
        resp.send(`Table of ${num1}=${ans3}`);
    }else{
        var ans2=m.primenumber(num1);
        resp.send(`${num1} is ${ans3}`);
    }
});

// app.get('/submit-form',function(req,resp){
//     const num1=parseInt(req.query.num1);
//     var ans1=m.factorial(num1);
//     var ans2=m.primenumber(num1);
//     var ans3=m.table(num1);

//     if(ans2){
//         resp.send(`${num1} is prime number <br>Facorial of num1 is ${ans1}<br> Table of ${num1}=${ans3}`);
//     }
//     else{
//         resp.send(`${num1} is not a prime number <br>Facorial of num1 is ${ans1}<br> Table of ${num1}=${ans3}`);
//     }
// });



app.listen(3006,function(){
    console.log("server 3006");
})