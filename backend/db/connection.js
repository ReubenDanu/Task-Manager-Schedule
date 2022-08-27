require('dotenv').config();
const { default: mongoose } = require("mongoose");
const mongo_uri = process.env.mongo_uri;
try {
    mongoose.connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('connected to database');
} catch (error) {
    handleError('failed to connect due to', error);
}


module.exports = mongoose;