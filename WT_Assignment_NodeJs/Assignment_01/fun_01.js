exports.addition=function(a,b){
    return a+b;
}
exports.subtraction=function(a,b){
    return a-b;
}
exports.multiplication=function(a,b){
    return a*b;
}
exports.dividation=function(a,b){
    return a/b;
}

exports.square=function(a){
    return a*a;
}

exports.sum=function(...a){
    var sum=0;
    for(var i=0;i<a.length;i++){
        sum+=a[i];
    }
    return sum;
}