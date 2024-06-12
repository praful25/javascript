const userId = 10;
let userEmail = "prafulbagde25@gmail.com";
var userPassword = "12345";
userCity = "Nagpur";
let userState;

// userId = 12; // not allowed Maharashtra

userEmail = "devpraful@gmail.com";
userPassword = "abcef";
userCity = "Pune";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 

console.table([userId, userEmail, userPassword, userCity, userState]);