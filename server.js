const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.CONNECTION_PORT || 9000;

connectDB();

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});