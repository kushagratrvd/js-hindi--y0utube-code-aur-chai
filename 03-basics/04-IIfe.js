//Immediately invoked function expressions
(function chai(){
    console.log("DB CONNECTED")
})();                     // syntax (function)()
(
    () => {
        console.log("DB CONNECTEDTWO")    // another method
    })();
(
    (name) => {
        console.log(`DB CONNECTEDTWO,${name}`)   //passing arguments
    })('Kush')