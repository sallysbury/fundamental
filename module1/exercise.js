// Exercise 

// Soal Nomor 1

const panjang = 5
const lebar = 3 

let hasil = panjang * lebar

console.log(hasil) // hasilnya 15
// Selesai

// Soal Nomor 2

const length = 5
const width = 3

let luas = 2*(length + width)

console.log(luas) // hasilnya 16
// Selesai

//Soal Nomor 3

const rumus = 2
const r = 5

let d = (r * 2) //diameter
let circum = (rumus * 3.14 * r) // circumference


console.log(d)
console.log(circum.toFixed(1))
console.log(Math.pow(5, 2)*3.14) //area
// Selelsai

// Soal Nomor 4

const a = 80
const b = 65

let c = (180 - a - b) // 180 sudut dari segitiga

console.log(c) // hasilnya 35
// selesai

// Soal Nomor 5

const now = new Date()
const future = new Date("2025-01-01")

//menggukanan millisecond untuk mempermudah pengambilan data
console.log(now.getTime())
console.log(future.getTime())

//menemukan selisih antara 2 hari dalam millisecond
let diff = future.getTime() - now.getTime()
//conversi dari millisecond --> hari
let days = Math.floor(diff / (1000 * 60* 60 * 24))

console.log(diff)
console.log(days)
console.log(`${days} hari menuju tahun baru`)
//Selelsai

// Soal Nomor 6
 
let n = 999
let tahun = Math.floor(n / 365)
let sisa = n % 365 // atau bisa "n - (tahun * 365)"
let bulan = Math.floor(sisa / 30)
let hari = sisa % 30 // atau bisa "sisa - (bulan * 30)"

console.log(`${tahun} tahun, ${bulan} bulan & ${hari} hari`)
// Selesai




