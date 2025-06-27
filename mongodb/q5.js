// insert this in the database
db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },
  {
    name: "Rafeal",
    email: "Rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
]);

// db.employees.countDocuments(); -> is command se hum use particular collection me
// kitne documents hai hum vo count kar sakte hai

// Update
// db.employees.updateOne({},{}) -> yaha pehla document jo milega vo update hoga
// 1st object yaha filter ka kaam kar raha hai agar vo blank rakhenge to uska matlab hai ki hume sabhi document update karna hai
// 2nd object yaha update ka kaam kar raha hai isme hume update karna hai jo field hai usme hume $set operator ka use karna hai
// Example:
// db.employees.updateOne({},{ $set: {age: 30} });

// Update Example:-
db.employees.updateOne({ email: "amy@gmail.com" }, { $set: { salary: 5000 } });

// ye example update many ka hai
// yaha filter argument empty hai iska matlab hum sabhi documents ko update kar rahe hai
// 2nd jo argument diya hai usme hum points name ki field set kar rahe hai par vo field hamare collection me nahi hai
// to vo field create ho jayegi aur set ho jayegi
db.employees.updateMany({}, { $set: { points: 1 } });

// ab hum yaha $inc operator ka use sikhenge
// $inc operator ka use hume koi field ki value ko increment karne ke liye hota hai
// example:
db.employees.updateMany({ department: "IT" }, { $inc: { points: 3 } });

// ab hum dekhenge ki hum field ka name change kaise karenge
// $rename operator ka use karenge
db.employees.updateMany({}, { $rename: { points: "score" } });

// ab agar kisi field ko remove karna hai to uske liye
// $unset operator ka use karenge
db.employees.updateMany({}, { $unset: { score: "" } });

// ab hum yaha dekhenge $push operator ka use sikhenge
// $push operator ka use hume array field me value add karne ke liye hota
// agar vo field exist nhi karti hai to vo create ho jayegi
db.employees.updateMany({}, { $push: { skills: "Python" } });

// filter ke sath use
db.employees.updateMany(
  { email: "johndoe@example.com" },
  { $push: { skills: "MERN" } }
);

// Ab hum yaha $pull operator ka use sikhenge
// $pull operator ka use hume array field se value remove karne ke liye hota
db.employees.updateMany(
  { email: "johndoe@example.com" },
  { $pull: { skills: "Python" } }
);

// par yaha problem ye hai isko jitni bar add karenge ye utni bar value add ho jayegi
// isliye hume $addToSet operator ka use karna hota hai taki values unique rahe
// $addToSet operator use hota hai taki array me unique values hi ho
db.employees.updateMany(
  { email: "johndoe@example.com" },
  { $addToSet: { skills: "MERN" } }
);

// ab hum yaha array se last se value delete karenge
// $pop operator ka use karenge to array ki last value remove ho jayegi
// $pop ki value 1 -> last value remove karega
// $pop ki value -1 -> first value remove karega
db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: 1 } });

// first value remove hogi
db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: -1 } });

// ab hum yaha upsert ka use sikhenge
// upsert ka use hume update karna hota hai agar document exist karta hai
// to update karega aur agar nhi hai to create kar dega
// upsert ka matlab update + insert se milkar bana hai
db.employees.updateOne(
  { email: "brian@gmail.com" },
  { $set: { name: "Brian" } },
  { upsert: true }
);

// delete
// ab hum document ko delete karna sikhenge
// yaha email user ki match hogi aur vo document delete ho jayega
db.employees.deleteOne({ email: "brian@gmail.com" });

// agar ek sath bohot sare delete karne hote hai
db.employees.deleteMany({ department: "IT" });

// agar ek sath bohot sare delete karne hote hai to hume $in operator ka use karna hota hai
// $in operator ka use hume array me values ko match karne ke liye hota
// db.employees.deleteMany(
//     {email: {$in: ["john@gmail.com", "brian@gmail.com"]}}
// )
