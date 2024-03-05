const myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleString())
//console.log(myDate.getDate())
//console.log(typeof myDate)
//let myDate1 = new Date(2023, 0, 1)
//console.log(myDate1.toString())
console.log(Date.now())
console.log(myDate.getMonth())
console.log(myDate.getDay())
//`${myDate.getDay()} and the time is ...`
console.log(myDate.toLocaleString('default',{
    weekday: "long"
}))