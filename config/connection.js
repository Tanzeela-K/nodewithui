const mysql = require('mysql');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "crud"
    })

db.connect((err) => {
    if (err) {
        console.log("err in connecting ", err)
    } else {
        console.log(" connected ")
    }
})

module.exports = db;
