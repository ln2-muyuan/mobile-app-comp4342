const mongoose = require('mongoose');

const mongoDBUrl = "mongodb+srv://ln2:gCbZGhxIgACsy2nD@cluster0.2nhh6kl.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectToDB;