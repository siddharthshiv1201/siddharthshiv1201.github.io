//objects
const student = {
  name: "Siddharth",
  age: 21,
};
console.log(student)
console.log(student.name)
console.log(student.age)
student.city = 'Jalandhar'
console.log(student)
student.city = 'Amritsar'
console.log(student)
console.log(student.name)
console.log(student["name"])
delete student.city
console.log(student)
const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student)
console.log(values)