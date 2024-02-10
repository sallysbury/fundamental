// Soal 1

function exercise1(tinggi){
    let triangle = ''
    // Iterate through each row
    for (let i = 1; i <= tinggi; i++) { //ketika ieu masuk nilai na = 
        let row = '';
        // Add numbers for the triangle
        for (let j = 1; j <= i; j++) { // ketika ieu masuk nilai 3 <= 2 
            row += j + ' ';
        }
        // Add the row to the triangle string
        triangle += row.trim() + '\n';
    }
    return triangle;
}

// string
function exercise2(tinggi){
    let triangle = ''
    // Iterate through each row
    for (let i = 1; i <= tinggi; i++) { //ketika ieu masuk nilai na = 
        let row = '';
        // Add numbers for the triangle
        for (let j = 1; j <= i; j++) { // ketika ieu masuk nilai 3 <= 2 
            row += j + ' ';
        }
        // Add the row to the triangle string
        triangle += row.trim() + '\n';
    }
    return triangle;
}


console.log(exercise1(5))


// let fruits = ["applle", "orange", "plum"]

// for (let fruit of fruits)
// console.log(fruit)