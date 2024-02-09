//STRING BUILT-in METHOD

let word = "purwadhika";
let wordCapital = word.toUpperCase();

console.log(wordCapital);
console.log(wordCapital.concat(word));

let name = "david"
let message = "hello " + name
let message2 = "hello ".concat(name);
//String interpolation
let message3 = `hello ${name}`

console.log(message);
console.log(message2);
console.log(message3);
