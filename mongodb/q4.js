// OPERTORS IN MONGODB
db.employees.find({ department: { $eq: "IT" } });
db.employees.find({ salary: { $gt: 2480 } });

// $eq	Equal to	{ age: { $eq: 18 } }
// $ne	Not equal to	{ name: { $ne: "John" } }
// $gt	Greater than	{ marks: { $gt: 80 } }
// $lt	Less than	{ price: { $lt: 100 } }
// $gte	Greater or equal	{ score: { $gte: 50 } }
// $lte	Less or equal	{ qty: { $lte: 10 } }
// $in	Value in array	{ city: { $in: ["Delhi", "Mumbai"] } }
// $nin	Not in array	{ status: { $nin: ["closed", "pending"] } }

db.employees.find(
  { salary: { $gt: 1000 }, department: { $eq: "IT" } },
  { name: 1 }
);
db.employees.find()