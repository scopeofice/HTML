const fs=require('fs');
fs.readFile("mydata.txt",function(err,data){
    if(err){
        console.log("error occured",err)
    }else{
        for(var i=1;i<=data.toString().split("\n").length;i++){
            console.log("This is line : "+i);
        }
    }
});