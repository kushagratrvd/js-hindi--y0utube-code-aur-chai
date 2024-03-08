const arr =[1,2,3,4,5]
// SYNTAX: for (const iterator of object) {     object can be string, array, objects of javascript,etc
//   }
for (const val of arr) {                
    //console.log(val)    
}
// MAPS                    takes unique entries and stays in same order
const map = new Map()
map.set("1","Australia")
map.set("2","austria")
map.set("3",'bulgaria')
//console.log(map)

for (const key of map) {
    //console.log(key)          //prints whole map as array
}
for (const [key,value] of map) {
    //console.log(key + ":="+value)
}

const myobj = {
    game1:"hockey",
    game2:"cricket"
}
for (const [key,value] of myobj) {            //thi method is not used to iterate object               //myobj is not iterable
    console.log(key + ":="+ value)
}