const express=require("express");
const app=express();

// env setup
const dotenv=require("dotenv")
dotenv.config({path: './config.env'})
const PORT=process.env.PORT;

app.use(express.json());

// For routers to work
app.use(require("./router/auth"))

//connect DB
require("./db/conn")


app.listen(PORT, (err)=>{
    if(err) console.log(err);
    else console.log(`Server is running on PORT: ${PORT}`);
})