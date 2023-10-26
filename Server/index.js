const express = require("express");
const https = require('https');
const fs = require('fs');
const cors = require("cors");


const app = express();
app.use(cors());

const port = 8800;


app.use(express.json());

app.get("/", (req, res) => {
    console.log("Received GET request")
    res.send("Hello World!");
});


// const userRoutes = require("./routes/user.routes");
// app.use("/user", userRoutes)
// const models = require("./models");
// models.sequelize.sync();
app.listen(port);


// const options = {
//     key: fs.readFileSync('CA/server.key'),
//     cert: fs.readFileSync('CA/server.cert')
//   };
  
//   https.createServer(options, app).listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });