const express = require("express");
const connectToDB = require("./config/databaseConfig");

const app = express();
const port = 8800;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Received GET request")
    res.send("Hello World!");
});


app.listen(port);


connectToDB();
