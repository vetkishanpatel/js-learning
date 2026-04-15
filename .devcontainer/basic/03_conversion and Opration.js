let score = 33
console.log(typeof score); // Output: number
console.log(typeof(score)); //can check the data type of a variable using typeof operator. Output: number

let Name = "vetkishan";
console.log(typeof Name); // Output: string

let isActive = true;
console.log(typeof isActive); // Output: boolean

let conerversion = String(score); // converting number to string using String() function
console.log(conerversion); // Output: "33"
console.log(typeof conerversion); // Output: string

let numConversion = Number(Name); // converting string back to number using Number() function
console.log(numConversion); // Output: NaN (Not a Number)
console.log(typeof numConversion); // Output: number

let boolConversion = Boolean(score); // converting number to boolean using Boolean() function
console.log(boolConversion); // Output: true (since 33 is a truthy value)
console.log(typeof boolConversion); // Output: boolean

let boolConversionFalse = Boolean(1); // converting 0 to boolean using Boolean() function
console.log(boolConversionFalse); // Output: false (since 0 is a falsy value)
console.log(typeof boolConversionFalse); // Output: boolean

/* In JavaScript, you can convert between different data types using built-in functions like String(), Number(), and Boolean(). 
This allows you to manipulate and work with data in the format that best suits your needs. Understanding how to perform these conversions is essential for effective programming in JavaScript. */      

/* *******************Operations on different data types******************* */
let num1 = 10;
let num2 = 20;
let sum = num1 + num2; // addition of two numbers // can perform other arithmetic operations like subtraction (-), multiplication (*), division (/), and modulus (%) on numbers as well.
console.log(sum); // Output: 30

let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2; // concatenation of two strings
console.log(greeting); // Output: "Hello, World!"

let bool1 = true;
let bool2 = false;
let boolResult = bool1 && bool2; // logical AND operation on two boolean values
console.log(boolResult); // Output: false

console.log(1+2+"3"); // Output: "33" (number 1 and 2 are added first, then concatenated with string "3")
console.log("3"+1+2); // Output: "312" (string "3" is concatenated with number 1, then concatenated with number 2)


/* JavaScript supports various operations on different data types, such as arithmetic operations on numbers, string concatenation for strings, and logical operations for boolean values. Understanding these operations is crucial for manipulating data effectively in JavaScript. */