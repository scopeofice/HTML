exports.addition=function(a,b){
    return a+b;
}

exports.factorial=function(a){
    f=1;
    for(var i=1;i<=a;i++){
        f=f*i;
    }
    return f;
}
exports.primenumber=(a)=>{
    
    for(var i=2;i<a;i++){
        if(a%i==0){
            return 'prime number';
        }
    }
    return 'prime number'
}

exports.table=(a)=>{    
    var str=``;
    for(var i=1;i<=10;i++){
        str+=`${a} x ${i}=${a*i}<br>`;
    }
    return str;
}