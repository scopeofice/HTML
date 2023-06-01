const express=require('express');
const app=express();
const m=require('./Circle');
const path=require('path');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'index_08.html'));
});

app.get('/submit-data',function(req,resp){
    const radius=parseInt(req.query.cir);

    const ans3=m.cArea(radius);
    const ans4=(m.cCircumference(radius)).toFixed(2);
    
    resp.send(`Area of circle : ${ans3}<br>
    Circumference of circle : ${ans4}<br>`);
});

app.listen(3003,function(){
    console.log('server 3003');
})