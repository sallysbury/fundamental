// nyoba bilangan prima
/*
const n = 20
let ave = 0

for (i = 0; i <= n; i++ ) {
    if (n % i === 0 )
    ave++
}
console.log(ave === 2 ? "prima" : "bukan prima")
*/

// nyoba sum
/*
const n = 3
let result = 0

for (i = 1; i <= n; i++){
    result += i
}
console.log(result) 
*/

//nyoba faktorial
const n = 4
let sum = 1

for (let i = n; i > 0; i--){
    console.log(i)
    sum *= i
}
console.log(sum)


//nyoba ngitung hari

let date = new Date('2024-2-28')
let days = date.getDay()
//console.log(days)

if (days === 0){
    console.log("hari minggu")
}else if (days === 1){
    console.log("hari senin")
}else if (days === 2){
    console.log("hari selasa")
}else if (days === 3){
    console.log("hari rabu")
}else if (days === 4){
    console.log("hari kamis")
}else if (days === 5){
    console.log("hari jumat")
}else if (days === 5){
    console.log("hari sabtu")
}
