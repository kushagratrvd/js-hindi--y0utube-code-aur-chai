const myobj =  {
    val1:"2",
    val2:"3",
    val3:"4"
}
for (const key in myobj) {
    //console.log(key)                  //val1 val2 val3   
}
for (const [key,value] in myobj) {
    //console.log(key+":="+value)                  //does not work correctly 
}
for (const key in myobj) {
    //console.log(Object(key))             //[String: 'val1'],[String: 'val2'],[String: 'val3']   
}
for (const key in myobj) {
    //console.log(myobj[key])                  //2 3 4  
}
for (const key in myobj) {
    //console.log(`${key} --- ${myobj[key]} `)          //val1 --- 2 ,val2 --- 3 ,val3 --- 4    
}
const languages = ["marathi","bengali","french"]
for (const key in languages){
    //console.log(key)      // gives keys 0,1,2
}
for (const key in languages) {
    //console.log(languages[key])   //marathi  bengali  french
}
const map1= new Map()
map1.set("IN","India")
map1.set("fr","France")
map1.set("br","Brazil")
for (const [key,value] in map1){
    console.log(key+value)              //does not return anything
}