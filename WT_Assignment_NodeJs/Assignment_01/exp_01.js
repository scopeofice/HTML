// const http=require("http");
// const fs=require("fs");
// const url=require("url");

const express=require('express');
const app=express();
const path=require('path');
const m=require("./fun_01");

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'index_01.html'));
});
app.get('/submit-data',function(req,resp){
            const a=parseInt(req.query.num1);
            const b=parseInt(req.query.num2);
            const c=(req.query.num3).split(",").map(Number);
            const ans=m.addition(a,b);
            const ans2=m.subtraction(a,b);
            const ans3=m.multiplication(a,b);
            const ans4=m.dividation(a,b);
            const ans5=m.square(a);
            const ans6=m.square(b);
            const ans7=m.sum(...c);
            resp.send(`Addition: ${ans}<br>Subtraction: ${ans2}<br>Multiplication:v${ans3}<br>Dividsion: ${ans4}<br>Square of number1: ${ans5}<br> Square of number 2: ${ans6}<br>Sum of all numbers: ${ans7}`);
        })
app.listen(3005,function(){
    console.log('server 3005')
});
// const server=http.createServer(function(req,resp){
//     const q=url.parse(req.url,true);
//     resp.writeHeader(200,{"content-type":"text/html"});

//     switch(q.pathname){
//         case "/submit-data":
//             if(q.query.btn==="all"){
//             const a=parseInt(q.query.num1);
//             const b=parseInt(q.query.num2);
//             const c=(q.query.num3).split(",").map(Number);

//             const ans=m.addition(a,b);
//             const ans2=m.subtraction(a,b);
//             const ans3=m.multiplication(a,b);
//             const ans4=m.dividation(a,b);
//             const ans5=m.square(a);
//             const ans6=m.square(b);
//             const ans7=m.sum(...c);
//             resp.write(`Addition: ${ans}<br>Subtraction: ${ans2}<br>Multiplication:${ans3}<br>Dividation:${ans4}<br>Square od number1: ${ans5}<br> Square of number 2;${ans6}<br>Sum of all numbers:${ans7}`);
//             }
//             break;
//         default:
//             const rs=fs.createReadStream('./nodeJS_01.html');
//             rs.pipe(resp);
//     }

// })
// server.listen(3007,function(){
//     console.log("server port no. 3007");
// })