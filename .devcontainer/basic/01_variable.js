const ac_id = 1239; // const is block scoped and cannot be reassigned, making it ideal for values that should remain constant throughout the program.
let ac_email = "vetkishan@gmail.com"; // let is block scoped and can be reassigned
let ac_city = "jaunpur";
let ac_country = "India";
var ac_name = "vetkishan"; // var is function scoped and can lead to unexpected behavior

console.log(ac_id); // accessing and printing the value of ac_id
console.log(ac_email); // accessing and printing the value of ac_email
console.log(ac_city); // accessing and printing the value of ac_city
console.log(ac_country); // accessing and printing the value of ac_country
console.log(ac_name); // accessing and printing the value of ac_name    

// ac_id= 1234; //conts cant change value
ac_email= "newemail@gmail.com"; // can change value of let variable
console.table({ ac_id, ac_email, ac_city, ac_country ,ac_name}); // using console.table for better visualization of variables

/* prefer not to use var keyword for variable declaration because o
f its function scope and hoisting behavior, which can lead to unexpected bugs and difficulties
 in maintaining code. Instead, using let and const provides block scope and helps prevent 
 issues related to variable redeclaration and unintended global variables. */