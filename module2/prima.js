// soal bilangan prima

const n = 28
let devider = 0

for(let i = 0; i <= n; i++){
    if(n % i === 0 ) {
        devider++
    }
}
console.log(devider === 2 ? "prima" : "bukan prima")
