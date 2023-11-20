const connectToProductionDB = require("./config/databaseConfig");
const express = require("express");
const bodyParser = require("body-parser")
const indexRoute = require("./routes/index.routes")
const morgan = require('morgan')


const app = express();
const port = 8800;

app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));


app.use('/', indexRoute);
app.use(morgan('dev'))

connectToProductionDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});