//Soal number 6 

let n = 10
let a = 0
let b = 1
let nextnumber = 0

for (let i = 1; i < n; i++) {
    nextnumber = a + b
    b = a 
    a = nextnumber
}
console.log(a)
