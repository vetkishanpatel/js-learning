let name = "vetkishan"; // string data type to store text values
let age = 24;       // number data type to store numeric values (both integers and floating-point numbers)  
let height = 5.8;// number data type to store numeric values (both integers and floating-point numbers)
let isEmployed = false; // boolean data type to store true or false values
let salary = null; // salary is not assigned yet
let phoneNumber; // phoneNumber is undefined
let hobbies = ["coding", "gaming", "traveling"]; // array data type to store multiple values in a single variable. Here, hobbies is an array of strings.
let address = {
    city: "jaunpur",
    country: "India"
}; // object data type to store collections of key-value pairs. Here, address is an object with properties city and country.
console.table({ name, age, height, isEmployed, salary, phoneNumber, hobbies, address }); // using console.table for better visualization of variables
/* JavaScript has several data types, including:
1. String: Used to represent text. Example: "Hello, World!"
2. Number: Used to represent both integers and floating-point numbers. Example: 42, 3.14
3. Boolean: Represents a logical entity that can have two values: true or false.
4. Null: Represents the intentional absence of any object value.
5. Undefined: Indicates that a variable has been declared but has not been assigned a value.
6. Object: Used to store collections of data and more complex entities. Objects can contain properties and methods.
7. Symbol: A unique and immutable primitive value used as the key of an object property.

Understanding these data types is crucial for effective programming in JavaScript, as it helps in choosing the right type for variables and ensures proper handling of data throughout the code. */