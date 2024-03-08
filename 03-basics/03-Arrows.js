/*const username = {
    name: "Kushagra",
    email: "vghjvhj",
    class1: function(){
        console.log(`${this.name}, is name`);
    }
}
username.class1()
username.name="fgfg"
username.class1()
function app(){
    const username = 'cvfdf'
    console.log(this.username)   //gives undefined bcz function k andar this kaam nhi kr rha
}
app()    // function k andar this se alag chizen nikalti hai
const app = function(){
    const username = 'kkkk'
    console.log(this.username)  // another method of function is also not able to give answer

}
app()
const app = () => {               //arrow function
    const username = 'kkkk'
    console.log(this.username)       // this also gives undefined
}
app()
ARROW FUNCTION : () => {},   also const variable = () => {}
const add= (n1,n2) =>{

    return n1+n2
}
console.log(add(3,4))
const add = (n1,n2) => (n1+n2)       //when {} is used, we havw to write return, no need of return in ()
console.log(add(3,4))
 const add = (n1,n2) => {username: "Kushagra"} //will give undefined
//console.log(add(3,4))
*/const add = (n1,n2) => ({username: "Kushagra"})  // return { username: 'Kushagra' }
console.log(add(3,4))