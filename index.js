let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.c1w0g0ag8m9n.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password123",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  console.log(result);
  res.send(result);
 }); 
});
app.listen(3000);
