let globalVar ="This ia a gobal variable";

function myVars(){
    let localVar = "This is a local variable";
    return localVar;
}

console.log(globalVar + ",it is accessble eveywhere")
console.log(myar()+ ",is only accessible inside a method or " + "a function")
