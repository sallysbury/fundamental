let format = ''
let count = 0
let number = 1120000
let numstr = number.toString()

for(let i = numstr.length - 1; i >= 0 ;i--){
    count++;
    console.log(`iterasi ${i} dan count ${count}`)
    format = numstr[i] + format
    console.log(`iterasi ${i} dan format ${format}`)
    console.log(format)
    if (count % 3 === 0){
        format = '.' +format
        console.log(`if masuk dan format ${format}`)
    }
}
format = 'Rp.' + format + ',00'
console.log(format)
console.log(numstr.length)