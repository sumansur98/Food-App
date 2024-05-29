const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sumansur98:sumansur98@myatlasclusteredu.yrxkven.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU";


const connectToMongo = async () => {
   await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'foodMern',
    }).then(()=>{
        console.log('connected to mongo');
    });
}

module.exports = connectToMongo;