const coding=["js","java","python","cpp"]
coding.forEach(function (item){    //in for each loop, function has no name
    //console.log(item)   //js java python cpp   
})
//USING ARROW FUNCTION
coding.forEach( (item) => {
    //console.log(item)    //js java python cpp
})
function pillu(item){
    //console.log(item)      //js java python cpp
}
coding.forEach(pillu)     // NOT forEach(pillu())
coding.forEach((item, key, arr) => {
    //console.log(item, key, arr)
})
const mycoding= [{language:"hindi",region:"UP"},{language:"tamil",region:"tamil nadu"},{language:"oriya",region:"orissa"}
]
mycoding.forEach( (item)=> {
    console.log(`${item.language} === ${item.region}`)
})