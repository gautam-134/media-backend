require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./routes/router");
require('./db/connection');
app.use(express.json());
app.use(cors());
app.use("/", router);
const PORT= process.env.PORT ||5000;
app.listen(PORT, () => {
    console.log("server listening on port: " + PORT);
});