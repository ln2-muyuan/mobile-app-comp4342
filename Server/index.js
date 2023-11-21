const express = require("express");
const bodyParser = require('body-parser');
const connectToDB = require("./config/databaseConfig");
connectToDB();


const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = 8800;
app.listen(port);




const router = require("./routes/index.routes");
app.use('/', router)

