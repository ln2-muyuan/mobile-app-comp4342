const mongoose = require('mongoose')
const {ConnectOptions} = require('mongoose')

const connectToProductionDB = async () => {
    try {
        console.log('Connecting to  database...');

        const mongoUri = "mongodb+srv://ln2:gCbZGhxIgACsy2nD@cluster0.2nhh6kl.mongodb.net/?retryWrites=true&w=majority";

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

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();

        if (mongoServer) {
            await mongoServer.stop();
            console.log('In-memory database stopped');
        }

        console.log('Database connection closed');
    } catch (err) {
        console.error('Error stopping the database:', err);
    }
};

module.exports = {connectToProductionDB, disconnectDB}