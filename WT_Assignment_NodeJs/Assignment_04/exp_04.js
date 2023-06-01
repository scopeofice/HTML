const express=require('express');
const app=express();

app.get('/',function(req,resp){
    for(var i=1;i<=100;i++){
        let output="";
        if(i%3===0){
            output+='fizz';
        }
        if(i%5===0){
            output+='buzz';
        }
        if(output===''){
            output=i.toString();
        }
        resp.write(output + '\n');
    }
    resp.end();
});
app.listen(3007,function(){
    console.log("server 3007");
});
