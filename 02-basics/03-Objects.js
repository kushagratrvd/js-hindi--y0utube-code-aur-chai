// singleton
//object.create

//object literals
const mySym = Symbol('key1')

const Jsuser = {
    name: 'Kushagra',
 //   mysym: 'key1' will give the string and not Symbol, for symbol we need to use []
    [mySym]: 'mykey1',
    Mobile: 7979079087,
    'location': 'delhi',
    email: 'sokesh@google.com'
}
//console.log(Jsuser.email)
//console.log(Jsuser['email'])
//console.log(Jsuser.location) not allowed bcz location is string and cant be access through .
//console.log(Jsuser['location'])
//console.log(Jsuser[mySym])
Jsuser.email = 'sokesh@Micro.com'
//console.log(Jsuser)
//Object.freeze(Jsuser)
//Jsuser.email = 'mukeshbgjghj'
//console.log(Jsuser)
Jsuser.greeting = function(){
    console.log(Jsuser.email)
}
Jsuser.greeting2 = function(){
    console.log(`the name is ${Jsuser.name}`)
}
// console.log(Jsuser.greeting)   Important '()' 
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())
