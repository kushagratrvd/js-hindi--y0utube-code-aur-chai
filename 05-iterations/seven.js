const numbers = [1,2,3,4,5,6,7,8,9,10]
const mynums = numbers.map((num) => num + 10)
//console.log(mynums)
const mynums1 = numbers.map((num) => num * 10).map((num) => num+1).filter((num) => num >= 40)
console.log(mynums1)