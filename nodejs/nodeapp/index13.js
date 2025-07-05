import dotenv from 'dotenv';
dotenv.config();
const  dbuser=process.env.DBUSER;
const dbpass=process.env.DBPASS;
console.log(dbuser,dbpass);