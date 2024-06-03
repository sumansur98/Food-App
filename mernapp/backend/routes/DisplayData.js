const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.foodItems, global.foodCategories]);
    } catch (error) {
        res.send({success : false});
    }
})

module.exports = router;