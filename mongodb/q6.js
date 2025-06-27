// Indexes ka use dekhenge MongoDB me

// ye command hai index dekhne ke liye
// ki index ka name kya hai
// db.getCollection('collection_name').getIndexes()
db.employees.getIndexes();

// agar hume index create karna hai to
db.employees.createIndex({email:1});

// agar index delete karna ho to
db.employees.dropIndex("email_1");

// aur index ki vjh se hume performance dekhnni hai ki 
// index na ho to kya hota hai
// aur index use kiya to performance kaisi hai
db.employees.find({email:"john@gmail.com"}).explain("executionStats");

