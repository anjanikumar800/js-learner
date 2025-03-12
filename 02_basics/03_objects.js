let jsUser = {
    name : "Anjani",
    roll_no : 240010150018,
    department : "CSE",
    email : "anjnisharm800@gmail.com",
    loginDay : ["sunday","saturday"]
}
//console.log(jsUser.name) // this is not best method
// console.log(jsUser["name"])
// console.log(jsUser["roll_no"])
// console.table([jsUser["name"],jsUser["roll_no"]])
// console.table([jsUser])
jsUser.email = "anjnisharma@google.com",
// console.table([jsUser])
Object.freeze(jsUser)  // change not proprogate
jsUser.email = "anjnisharma@gmail.com",
console.table([jsUser])