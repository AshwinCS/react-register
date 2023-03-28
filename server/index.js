const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "employeeSystem"  //try small s
})

app.post('/register', (req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO usertable (first_name,last_name,email,password) values (?,?,?,?)",
    [firstName,lastName,email,password], (err, result)=>{
        console.log(err);
    })

    //res.send("Inserted a new row into database usertable");
})

app.get("/",(req,res)=> {
    res.send("PORT 3001");
})

app.listen(3001, ()=>{
    console.log("Server running on 3001");
})
