// db.users.insertOne({name:"John"}) --> we give objects as a parameter
// show collections ---> to check the collections
// db.users.find() --> to check the data

// lpua> db.users.insertMany([{name:"Deepak", age:22},{name:"Ashutosh",age:44}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('685b7e4ad130dba61ab5f89a'),
//     '1': ObjectId('685b7e4ad130dba61ab5f89b')
//   }
// }
// lpua> db.users.find()
// [
//   {
//     _id: ObjectId('685b7d0cd130dba61ab5f899'),
//     name: 'Siddharth',
//     age: 21
//   },
//   {
//     _id: ObjectId('685b7e4ad130dba61ab5f89a'),
//     name: 'Deepak',
//     age: 22
//   },
//   {
//     _id: ObjectId('685b7e4ad130dba61ab5f89b'),
//     name: 'Ashutosh',
//     age: 44
//

db.users.insertMany([
  { name: "Deepak", age: 22 },
  { name: "Ashutosh", age: 44 },
  { name: "Siddharth", age: 21, city: "Varanasi" },
]);

lpua> db.users.deleteOne({}) // to delete the data
db.users.drop({}) // to delete the collection (users)