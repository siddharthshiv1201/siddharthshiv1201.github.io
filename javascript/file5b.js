// arrow functions
// function greet(){
//     console.log("this is regular function");
// }
// greet();

// // in arrow function 
// const greet1 = () => {
//     console.log("this is arrow function");
// }
// greet1();

// // arrow function with parameter
// const greet2 = (name) => {
//     console.log("this is arrow function with parameter", name);
// }
// greet2("siddharth");

// callback function
const greet3 = (name, callback) => {
    console.log("this is arrow function with parameter", name);
    callback();
}
greet3("siddharth", () => {
    console.log("this is callback function");
})

