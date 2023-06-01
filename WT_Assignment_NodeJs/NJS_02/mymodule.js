exports.factorial=function(num){
    f=1;
    for(var i=1;i<=a;i++){
        f=f*1;
    }
    return f;
}
exports.myprime=function(num){
    if(num<=1){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                return false;
            }
        }
    }
    return true;
}
exports.printable=function(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
module.exports={
    factorial,
    myprime,
    printable
}