const Express = require("express")
const app = Express()
const jwt = require("jsonwebtoken")
const {Pool} = require("pg")
require("dotenv").config()
const pool = new Pool({
    host : process.env.PG_HOST,
    port : process.env.PG_PORT,
    database : process.env.PG_DATABASE,
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD
})
pool.connect().then(()=>{console.log("postgres connected")}).catch((err)=>{console.log(err)})

app.listen(5000 , ()=>{
    console.log("hey")
})