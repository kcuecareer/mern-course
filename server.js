const express = require("express");
const connectDB = require('./config/db');


// Created variable to hold Express
const app = express();

// Connect the database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server API is up and running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
