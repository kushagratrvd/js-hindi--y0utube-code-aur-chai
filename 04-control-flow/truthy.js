/*falsy values:
false, 0 , '', -0, BigInt: 0n, null, undefined, Nan
truthy values:
true, ' ', '0', 'false', {}, [], funtion(){}
*/ const abc = 'ddd'
if(abc){                // as abc = 'ddd' it will always be true
    console.log("true")
}
else{
    console.log("false")
}
const emptyArr=[]
if(emptyArr.length === 0){   //using length of array as truth or false value
    console.log("true")
}
else{
    console.log("doob maro")    
}
const emptyObj={}
if(Object.keys(emptyObj).length === 0){   //using length of array as truth or false value
    console.log("true")
}
else{
    console.log("doob maro")    
}
//Nullish Coalescing Operator (??): null, undefined
let val1;
//val1 = 10??20
//val1= null??10
//val1 = null??10??20
//val1 = undefined??10
console.log(val1)
