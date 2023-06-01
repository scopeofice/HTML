const fs=require('fs');
fs.readFile("mydata.txt",function(err,data){
    if(err){
        console.log("error occured",err)
    }else{
        var arr=data.toString().split("\n")
        for(var i=0;i<arr.length;i++){
            console.log((i+1)+" "+arr[i]);
        }
    }
});
