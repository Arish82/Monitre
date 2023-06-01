const mongoose = require("mongoose");
const DB=process.env.DATABASE

mongoose.connect(DB).then(() =>
    console.log("DB connected success")
).catch((err) => console.log(err))