//

let age = 21

if (age >= 17) {
    console.log("you can now create an ID Card ")
}
else {
    console.log("you are not old enough to create an ID Card")
}

// 

let grade = "D"

if (grade === "A") {
    console.log("Excelent Result")
} else if (grade === "B") {
    console.log("great Result!")
} else { 
    console.log("Good Result")
}

// tugas

let date = new Date('2024-02-06')
let day = date.getDay()
console.log(day)

if (day === 0){
    console.log("minggu")
} else if (day === 1){
    console.log("senin")
} else if (day === 2){
    console.log("selasa")
} else if (day === 3){
    console.log("rabu")
} else if (day === 4){
    console.log("kamis")
} else if (day === 5){
    console.log("jumat")
} else if (day === 6){
    console.log("sabtu")
}

// Contoh Switch case penyelesaian selain if dan else if
switch (day) {
    case 0:
        console.log("hari minggu")
        break;
    case 1:
        console.log("hari senin")
        break;
    case 2:
        console.log("hari selasa")
        break;
    case 3:
        console.log("hari rabu")
        break;
    case 4:
        console.log("hari kamis")
        break;
    case 5:
        console.log("hari jumat")
        break;
    case 6:
        console.log("hari sabtu")
        break;
}


// contoh logical operators

let car = "BMW"
let car2 = "TOYOTA"

if (car === "BMW" && car2 === "TOYOTA"){
    console.log("this car is awesome")
} else {
    console.log("not a good car")
}

// contoh Negasi
let str = "javascript"

if (!(str === "javascript")){
    console.log("its javascript")
} else {
    console.log("not javascript")
}

//ternary Operator, mempersingkat jika hanya 2 kondisi 
console.log(str === "javascript" ? "javascript" : "not javascript")

