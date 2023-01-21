const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE,OPTIONS"
        );
        
        next();
    });
    app.get("/", (req, res) => {
        res.send("Hello Server");
});


app.use((req, res, next) => {
    console.log(req.url);
    const error = new HttpError("Route not found", 404);
    return next(error);
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI).then(
    app.listen(port, () => {
        console.log("Listining on port " + port);
        console.log("connected");
    })
);