db.employees.insertMany([{
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    salary:2456,
    department:"IT",
    location:["FL","TX"],
    date:Date()
    

},
{
    name: "Cathy G",
    age: 40,
    email: "cathy@example.com",
    salary:2486,
    department:"IT",
    location:["FL","TX","NY"],
    date:Date()

}
])

// lpua> db.employees.find().skip(1)-> skip 1 record

//lpua> db.employees.find().limit(1)-> limit 1 record
// db.employees.find().skip(1).limit(1);-> skip 1 record and limit 1 record
// db.employees.find().sort({name:1})->(1) mtlb increasing order me sort hua (-1) decreasing order me sort hua
// db.employees.find().sort({name:-1})

// db.employees.find({department:"IT"})
// db.employees.find({},{name:1})-> bas name dikhega 1-> mtlb true bas wahi dikhega
db.employees.find({},{_id:0,name:1})
// 1st bracket means -> filter
// 2nd bracket means-> projections
// db.employees.find({},{Empname:"$name"})--> name ko Empname se replace kar dega


db.employees.find().sort({ salary: -1 }).limit(2);


db.Users.insertMany([{
    name:"Siddharth",
    email:"sid@example.com",
    pass:12345
},
{
    name:"Deepak",
    email:"deepak@example.com",
    pass:12345
},
{
    name:"Rohit",
    email:"rohit@example.com",
    pass:12345
}]) 