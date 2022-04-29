const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_CNN);

        console.log('db online');

    } catch (error) {

        console.log(error);
        throw new Error('Failed to initialize db');
    }
}

module.exports = {
    dbConnection
}