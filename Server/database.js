const mysql = require("mysql");
const { db } = require("./keys");

//Connect
const pool = mysql.createPool(db);

pool.getConnection((err, connection) => {
    if (err) {

        if (!connection) {
            console.error("Sorry, no DB!");
        }
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Sorry, connection lost!");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Too many connections or try it later");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("You are not allowed");
        }
    }

    if (connection) {
        connection.release();
        console.log("DB connection is succesful");
    }
    return;
});


module.exports = pool;