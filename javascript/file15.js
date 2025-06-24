const obj = { name: "Siddharth", age: 22 };

const jsonStr = JSON.stringify(obj);
console.log(jsonStr);
// Output: {"name":"Siddharth","age":22}

const obj2 = JSON.parse(jsonStr);
console.log(obj2);
// Output: { name: 'Siddharth', age: 22 } 