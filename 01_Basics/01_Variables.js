const accountId = 14287
let accountEmail = "ankita@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "wrt@gmail.com"
accountPassword = "213533"
accountCity = "pune"

console.log(accountId);

// Prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
