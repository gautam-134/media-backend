const mongoose = require("mongoose");
require('dotenv').config();
const db = process.env.DATABASE;
mongoose.connect(db).then(()=>console.log("Database Connection Established"))

.catch((error)=>{
    console.log("error",error);
})