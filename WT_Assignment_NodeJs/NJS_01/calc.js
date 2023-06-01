function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function square(a) {
    return a * a;
  }
  
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    sum
  };
  




// const addition=function(a,b){
//     return a+b;
// }
// const substraction=function(a,b){
//     return a-b;
// }
// const division=function(a,b){
//     return a/b;
// }
// const multiplication=function(a,b){
//     return a*b;
// }
// const square=function(a){
//     return a*a;
// }
// const sum=function(...numbers){
//     return numbers.reduce((total,num)=>total+num,0);
// }
// module.exports={
//     add:addition,
//     sub:substraction,
//     div:division,
//     mul:multiplication,
//     sqr:square,
//     sum:sum
// }