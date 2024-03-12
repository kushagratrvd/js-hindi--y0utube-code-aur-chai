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
    //console.log(`${item.language} === ${item.region}`)
})
const values = coding.forEach((item) => {
    //console.log(item);
    return item;         //prints undefined at last irrespective of return statement
})
//console.log(values)

// FILTER COMMAND 
const arr = [1,2,3,4,5,6,7,8,9,10]
const nums = arr.filter((num) => num > 4)  // returns something so it needs to be stored   , if {num > 4}, then we need to write a return statement:
//(num) => {return num > 4}
//console.log(nums) 
// AB ISI KO FOR EACH SE:
const arr1 = []
arr.forEach((num) => {
    if(num>4){
        arr1.push(num)
    }
})
//console.log(arr1)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let mybooks = books.filter( (bk) => bk.genre === "History" )

mybooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre ==="History"})
console.log(mybooks)