const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sumansur98:sumansur98@myatlasclusteredu.yrxkven.mongodb.net/foodMern?retryWrites=true&w=majority&appName=myAtlasClusterEDU";


const connectToMongo = async () => {
   await mongoose.connect(mongoURI).then(async ()=>{
        console.log('connected to mongo');
        const foodCollection = mongoose.connection.db.collection('food_items');
        const foodResult = await foodCollection.find({}).toArray();
        console.log('result');
        //console.log(foodResult);
        global.foodItems = foodResult;
        const catCollection = mongoose.connection.db.collection('food_categories');
        const catResult = await catCollection.find({}).toArray();
        global.foodCategories = catResult;
        console.log('result');
       // console.log(catResult);
    }).catch(()=>{
        console.log('errorr')
    });
}

module.exports = connectToMongo;