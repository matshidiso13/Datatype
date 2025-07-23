prompt = require('prompt-sync')();
let l= prompt("type ny number:");
let b= prompt("type ny number:");
let length = parseInt(l);
let breadth = parseInt(b);

function multiply(length,breadth){
    this.length=length;
    this.breadth=breadth;
    let answer = length*breadth;
  return answer;
}
console.log(multiply(length,breadth))