const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sumansur98:sumansur98@myatlasclusteredu.yrxkven.mongodb.net/foodMern?retryWrites=true&w=majority&appName=myAtlasClusterEDU";


const connectToMongo = async () => {
   await mongoose.connect(mongoURI, {
        dbName: 'foodMern',
    }).then(()=>{
        console.log('connected to mongo');
    }).catch(()=>{
        console.log('error')
    });
}

module.exports = connectToMongo;