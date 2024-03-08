  // var is not preferable because it interfers in different scopes
 /* const a = 2
if(true){
    const a=1
    let b=2
    var c=3
    console.log("INNER: ",a)
}
console.log(a)
//console.log(b)
//console.log(c)
function one(){
    const username = "Kushagra"
    function two(){
        const user2 = "pillu"
        console.log(username)
    }
    two()
    //console.log(user2) will give error bcz user2 is defines inside two()
}
one()
//+++++++++++++++++++++IMPORTANT+++++++++++++++++++++++++++++
*/console.log(add1(2));    //will not give error
function add1(n1){
    return n1+1
}
console.log(two(3))     // will give error
const two = function(n2){
    return n2+2
}
