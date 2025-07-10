let petName = 'Rocky' // Global variable
myFunction()
function myFunction() {
fruit = 'apple'; // Considered global
console.log(typeof petName + '- ' + 'My pet name is ' +petName)
}
console.log(typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)


//Boolean
let a = true;
let b = false;

alphabet();

function alphabet() {

    let result1 = typeof alphabet + 5 < 3;
    console.log("Result 1:", result1); // false
    console.log( typeof result1); // boolean

    let result2 = typeof +a && b;
    console.log("Result 2:", result2); // false
    console.log( typeof result2); // boolean
}
//number
let x = 10;
function number() {
    let typeOfFunction = typeof number;
    console.log( typeof x);                      
}
number();

//string
let Name = 'Esther'
vegetable = 'tomato';
function Name(){console.log(typeof Name + '-' + 'my Name is' + Name)
    console.log(typeof Name +'-' + 'my Name is' + Name + 'vegetable name is' + vegetable )}



