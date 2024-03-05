//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object
//console.log(tinderUser)
tinderUser.id = '04'
tinderUser.name= 'Kushagra'
tinderUser.location = 'address'
//console.log(tinderUser)
const regUser={
    email: 'kukbnkj',
    fullname: {
            fullUsername: {
                firstname: 'hvfhjvhj',
                lastname: 'giugjg',
            }
    }
}
//console.log(regUser)
//console.log(regUser.fullname)
//console.log(regUser.fullname.fullUsername)
//console.log(regUser.fullname.fullUsername.firstname)
const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)   {} signifies target empty array
//console.log(obj3)
const obj3 = {...obj1,...obj2}    //spread like array
//console.log(obj3)
const users = [
    {
        user : '1',
        email : 'fdddd'
    },
    {
        user : '2',
        email : 'vchv'
    },
    {
        user: '3',
        email: 'ddfdd'
    }
]
//console.log(users)
//console.log(users[1])
//console.log(users[1].email)
//console.log(tinderUser)
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty("isloggedIn"))

const course = {
    name: 'kushagra',
    price:'333',
    place: 'ddd'
}
const {place} = course    // to shorten the length of course.place
//console.log(place)
const {place: a} = course   // to further shorten place to a
console.log(a)

