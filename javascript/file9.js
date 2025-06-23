//array methods
// const points = [2, 5, 3, 2, 1, 8];
const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }
// points.forEach((value) => {
//   console.log(value);
// });
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });
// points.forEach((a, b, c) => {
//   console.log(a);
// });

// MAPS
// let nums = [1, 2, 3];
// let doubled = nums.map(x => x * 2);
// console.log(doubled); // [2, 4, 6]

// FILTER
// let nums = [1, 2, 3, 4, 5];
// let even = nums.filter(x => x % 2 === 0);
// console.log(even); // [2, 4]

// FIND

// let nums = [5, 12, 8, 130, 44];
// let found = nums.find(x => x > 10);
// console.log(found); // 12 (pehla element > 10)


//REDUCE
const points=[2,5,3,2,1,8];
const result=points.reduce((sum,value)=>{
  return sum+value;
},0);
console.log(result);
// 