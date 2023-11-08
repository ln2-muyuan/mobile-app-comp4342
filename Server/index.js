const {connectToProductionDB,disconnectDB}= require("./config/databaseConfig");
const express = require("express");
const https = require('https');
const fs = require('fs');
const cors = require("cors");
const bodyParser = require("body-parser")
const indexRoute = require("./routes/index.routes")
const morgan = require('morgan')


const app = express();
app.use(cors());

const port = 8800;


app.use(express.json());

//routes
app.use('', indexRoute);

//log
app.use(morgan('dev'))

//body parser
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

connectToProductionDB();

// Close the database connection on application shutdown
process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit(0);
});

// const userRoutes = require("./routes/user.routes");
// app.use("/user", userRoutes)
// const models = require("./models");
// models.sequelize.sync();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// const options = {
//     key: fs.readFileSync('CA/server.key'),
//     cert: fs.readFileSync('CA/server.cert')
//   };
  
//   https.createServer(options, app).listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });