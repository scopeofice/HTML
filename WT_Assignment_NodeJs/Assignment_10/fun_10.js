exports.primenumber=(a)=>{
    
    for(var i=2;i<a;i++){
        if(a%i==0){
            return 'not prime';
        }
    }
    return 'prime';
}
