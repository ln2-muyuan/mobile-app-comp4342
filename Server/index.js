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


app.use('', indexRoute);


app.use(morgan('dev'))


app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

connectToProductionDB();


process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit(0);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});