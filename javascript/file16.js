// // promise
// const f1=() =>{
//     setTimeout(()=>{
//         return 5;
//     }    ,1000);
// };
// const f2=(x) =>{
//     console.log(x+6);

// }
// const n=f1();
// f2(n);

// const f1 = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(Math.random() > 0.5){
//       resolve(5);
//         }
//         else{
//             reject("Something went wrong");

//         }
//     },5000);
//   });
// };

// const f2 = (x) => {
//   console.log(x + 6);
// };

// f1().then((n) => {
//   f2(n); // ye 5 sec delay ke baad chalega, output: 11
// })
// .catch((error)=>{
//     console.log(error);

// });



// const f1 = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num < 0) {
//       reject("Negative number");
//     } else {
//       resolve(num);
//     }
//   });
// };

// const f2 = (x) => {
//   console.log("Result:", x + 6);
// };

// // Call with input
// f1(-5)
//   .then((n) => {
//     f2(n); // Output:  Result: 11
//   })
//   .catch((error) => {
//     console.log(error);
//   });


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email-Id: ${user.email}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
