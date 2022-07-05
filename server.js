const express = require("express");
const connectDb = require("./config/connectDB");
const Person = require("./models/Person");


const {
    addPerson,
    findPeopleByName,
    SearchById,
    findRemoveById,
    findAndUpdate
} = require("./routes/person");

const app = express();

connectDb();

const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server listening on port ${port}!`);
});