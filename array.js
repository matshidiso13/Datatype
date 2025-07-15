let courses = ["Html", "css", "javascript", "REACT"];

let total = courses.length;
console.log (`Elements inside arrays courses are ${courses}`);
console.log(`Number of items in an array is ${total}`);
//We creating a list of string with variable convertor
let convertor = courses.toString();

//all this methods become available from string library
let smalls = convertor.toLowerCase();
let caps = convertor.toUpperCase();

console.log(`This array becomes a list of strings ${convertor}`);
console.log(`Testing if string can call uppercase ${caps}`);
console.log(`Testing if string can be smaller cases ${smalls}`);

let student = {
    firstname: "Dineo",
    secondname: "Dakalo",
    stipend: 6000
}

console.log(delete student.stipend)
console.log(`student info without stipend details ${student}`)

// concatinate is a method 
