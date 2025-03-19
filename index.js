require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/db.js");
const userRoutes = require("./routes/userRoute.js");

const Port = 8080;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(Port, ()=>{
    connectDB();
    console.log(`Server is running on Port ${Port}`);
});