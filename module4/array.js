// array declar
/*
let arr = ['A', 'B', 'C', 'D', 'E']
let rr = new Array('A', 'B', 'C', 'D', 'E')

let scores = [10,20, 30, 40, 50]
let students = [
    {
        "name" : "student 1",
        "email" : "student@gmail.com"
    },
    {
        "name" : "student 2",
        "email" : "student@gmail.com"
    }
]
//console.log(students[0])
// console.log(scores[4].toString())
console.log(scores.join(1))
//console.log(arr[2])
*/


// if (arr[0] > arr[1]) {
// //    console.log(arr[0])
// }
// if(arr[1] > arr[2]) {
//  //   console.log(arr[2])
// }

function array(arr){
    console.log(arr)
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]   
        console.log( "arr" + arr[i])     
        console.log("hasil" + sum)
    }
    return sum
}
let arrayInput=[2,30,1,20]
console.log(array(arrayInput))
