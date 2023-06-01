const fs=require('fs');
// data=fs.readFile("mydata.txt",function(err,data){
//     if(err){
//         console.log(err)
//     }
// });


fs.readFile("mydata.txt",function(err,data){
    if(err){
        console.log("error occured",err)
    }else{
        console.log("first file : "+data.toString().split(" ").length)
    }
})

fs.readFile("myfile.txt",function(err,data){
    if(err){
        console.log("error occured",err)
    }else{
        console.log("second file : "+data.toString().split(" ").length)
    }
})

// console.log(data.toString())

// const info=data.toString().split(" ").length
// console.log(info)


// data1=fs.readFile("myfile.txt",function(err1,data1){
//     if(err1){
//         console.log('err1');
//     }else{
//         console.log(data1.toString().split(' ').length);
//     }
// });
