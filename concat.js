// concatenate is a method we use to combine or join two or more array into one.

let intro = ["HTML", "Css", "js"];
let basics = ["problem solving", "coding", "git"];
let fundamentals = ["Algorithms", "functions", "logics"];

let cs = intro.concat(basics,fundamentals)
console.log(cs)

//flat method we use it for reducing nesting inside an array also called fatten array

let courses = [["Html","css", "javascript"]
["problem solvings", "coding", "git"]
["Algorithms", "Functions", "Logics"]]

let subjects = courses.flat(Infinity)
console.log(subjects)
