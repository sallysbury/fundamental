/*const n = 4
let sum = 1

for (let i = n ; i > 0; i--){
    console.log(i)
    sum *= i
}
console.log(sum)
*/

let n = 10
let a = 0
let b = 1
let nextnumber = 0

for (let i = 1; i < n; i++){
    nextnumber = a+b
    b = a
    a = nextnumber
}
console.log(a)