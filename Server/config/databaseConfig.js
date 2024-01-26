const mongoose = require('mongoose')

require('dotenv').config()

const mongoUri = process.env.MONGODB_URL;
const connectToProductionDB = async () => {
    try {
        console.log('Connecting to  database...');
        
         await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to database with url:', mongoUri);

    } catch (err) {
        console.error('Error connecting to production database:', err);
        console.log("Try to reconnect to production database in 2 seconds")
        setTimeout(connectToProductionDB, 2000)
    }
};


module.exports = connectToProductionDB;