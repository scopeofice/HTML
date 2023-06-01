const express=require('express');
const app=express();
const m=require('./Circle');
const r=require('./Rectangle');
const t=require('./Triangle');
const path=require('path');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'index_03.html'));
});

app.get('/submit-data',function(req,resp){
    const length=parseInt(req.query.len);
    const width=parseInt(req.query.wid);
    const radius=parseInt(req.query.cir);
    const side1=parseInt(req.query.a);
    const side2=parseInt(req.query.b);
    const side3=parseInt(req.query.c);

    const ans1=r.area(length,width);
    const ans2=r.perimeter(length,width);
    const ans3=m.cArea(radius);
    const ans4=(m.cCircumference(radius)).toFixed(2);
    const ans5=m.cDiameter(radius);
    const ans6=t.tPerimeter(side1,side2,side3);
    const ans7=t.isEquilateral(side1,side2,side3);
    
    resp.send(`Area of Rectangle : ${ans1}<br>
    Perimeter of rectangle : ${ans2}<br><br>
    Area of circle : ${ans3}<br>
    Circumference of circle : ${ans4}<br>
    Diameter of circle : ${ans5}<br><br>
    Perimeter of triangle : ${ans6}<br>
    Triangle isEquilateral : ${ans7}`);
});

app.listen(3009,function(){
    console.log('server 3009');
})