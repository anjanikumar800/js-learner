const accountId = 144553
let accountEmail = "anjani@google.com"
var accountPassword = "12345"
let accountCity = "new delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])