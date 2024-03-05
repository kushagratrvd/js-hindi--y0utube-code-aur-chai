const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9]
//arr.push(arr1)
//console.log(arr)

//console.log(arr.concat(arr1))
const arr3 = [...arr, ...arr1]
//console.log(arr3)
const arr4 = [1,2,3,[4,5],6,7,[8,[9,10]]]
//console.log(arr4.flat());
console.log(Array.from("Kushagra"))
console.log(Array.from({name: "Kushagra"})) // interesting
let arra1 = 100
let arra2 = 200
let arra3 = 300
console.log(Array.of(arra1,arra2,arra3))