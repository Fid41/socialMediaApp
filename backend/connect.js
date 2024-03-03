import mysql from "mysql"

export const db = mysql.createConnection({
    host:"locahost",
    user:"root",
    password:"root123",
    database:"social"
})