// function arguments and paramters

// function greet(student){
//     console.log(`hello ${student}`);
// }
// greet("Siddharth");

// function add(a,b){
//     return a+b;
// }
// let sum=add(3,4);
// console.log(sum);

//  arguments keyword

function add(a,b){
    console.log(arguments);
    return a+b;
}
let sum=add(3,4,5,6,7,8,9);
console.log(sum);