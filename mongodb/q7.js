

// Aggregation Operations -> ye find ka alternative hai
// process karta hai multiple documents aur uske baad computed result return karta hai
// Aggregation Operations ke liye pipeline ka use hota hai

// db.employees.aggregate([
//     {$match: {department:"IT"}},    ---> ye yaha filter ka kaam kar raha hai -> inko yaha pipeline kahte hai
//     {$project:{name:1,department:1}}  --> aur ye projection ka kaam kar raha hai
// ])

db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, salary: 1 } },
  { $sort: { salary: 1 } },
  { $limit: 3 },
]);

// yaha $group ka use dekhenge
db.employees.aggregate([
  {
    $group: { _id: "$department", total: { $sum: "$salary" } },
  },
]);

// example
// yaha name ko chor kar sabhi fields show hongi documents ki
db.employees.aggregate([
  {
    $project: { name: 0 },
  },
]);

// example
// yaha name field hi show hogi par yaha hum uska alias name show karenge
db.employees.aggregate([
  {
    $project: { EmpName: "$name" },
  },
]);

// example
// yaha hum $multiply operator use karenge
// keval show karne ke liye
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] },
    },
  },
]);

// display name email and salary for all the IT employees using aggreation
db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { _id: 0, name: 1, email: 1, salary: 1 } },
]);

// display annual salary of all employees
db.employees.aggregate([
  {
    $project: { _id: 0, name: 1, annualSalary: { $multiply: ["$salary", 12] } },
  },
]);

// display employees whose salary is greater than 3000
// and show CTC instead of salary field
db.employees.aggregate([
  { $match: { salary: { $gt: 3000 } } },
  { $project: { _id: 0, name: 1, CTC: "$salary" } },
]);

// Query to perform
// Insert the following document into a collection called students
db.students.insertOne({
  name: "Alice Johnson",
  age: 23,
  cousrses: ["Math", "Physics"],
  enrolled: true,
});

db.students.insertMany([
  { name: "Tom", age: 22 },
  {
    name: "Sara",
    age: 24,
  },
  {
    name: "Mike",
    age: 21,
  },
]);

// calculate the average age of the student using aggregate
db.students.aggregate([
    {$group: {_id: null, averageAge: {$avg: "$age"}}},
])


// update the alice age to 24
db.students.updateOne(
    {name:"Alice Johnson"},
    {$set: {age: 24}}
)

// add new course "Chemistry" to student cousrses if not exists
db.students.updateMany(
    {},
    {$addToSet: {cousrses: "Chemistry"}}
)

// increment age by one for all enrolled students
db.students.updateMany(
    {enrolled: true},
    {$inc: {age: 1}}
)

// return only name and age of all students
db.students.aggregate([
    {$project: {_id:0, name:1, age:1}}
])

// or

db.students.find({}, {name: 1, age: 1, _id: 0});

// remove the physic course from the alice courses
db.students.updateOne(
    {name:"Alice Johnson"},
    {$pull: {cousrses: "Physics"}}
)


// ek new collection create karna hai address collection ka
db.address.insertMany([
    {studentId: ObjectId('685cdc9513c6197cb2b71238'), city: "New York", country: "USA"},
    {studentId: ObjectId('685cdd6c13c6197cb2b71239'), city: "Los Angeles", country: "USA"},
    {studentId: ObjectId('685cdd6c13c6197cb2b7123a'), city: "Chicago", country: "USA"},
    {studentId: ObjectId('685cdd6c13c6197cb2b7123b'), city: "Houston", country: "USA"}
])

// join two tables using aggregation
// db.students.aggregate([
//     {
//         $lookup: {
//             from: "address", // collection name to join
//             localField: "_id", // field from students collection
//             foreignField: "studentId", // field from address collection
//             as: "addressInfo" // output array field
//         }
//     },
//   {$unwind: "$address"}, // agar address array me multiple entries hai to unko alag alag document me convert kar dega
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             age: 1,
//             addressInfo: 1 // show address info
//         }
//     }
// ]);


db.students.aggregate([
    {
        $lookup: {
            from: "address",
            localField: "_id",
            foreignField: "studentId",
            as: "address"
        }
    },
    {$unwind: "$address"},
    {
        $project: {
            name: 1,
            "address.city": 1,
            "address.country": 1
        }
    }
]);