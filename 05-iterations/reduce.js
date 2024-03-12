const nums = [1,2,3]
/*const mynums = nums.reduce( function (acc, currval) {
    console.log(`accumulated: ${acc} cuurent value: ${currval}`)
    return acc + currval
},0)
console.log(mynums)
const mynums = nums.reduce( (acc, currval) => {
    console.log(`accumulated: ${acc} cuurent value: ${currval}`)
    return acc + currval
},0)
//console.log(mynums)
*/const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total = shoppingCart.reduce((acc,item) => (acc+item.price),0)
console.log(total)