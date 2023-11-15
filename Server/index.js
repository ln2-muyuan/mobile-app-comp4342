const express = require("express");
const connectToDB = require("./config/databaseConfig");

const app = express();
const port = 8800;

connectToDB();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Received GET request at index.js")
    res.send("Received GET request at index.js");
});

app.listen(port);

const router = require("./routes/index.routes");
app.use('/', router)

