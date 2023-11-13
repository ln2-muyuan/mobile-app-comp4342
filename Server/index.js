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


const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");


app.use("/user", userRoutes);
app.use("/post", postRoutes);

