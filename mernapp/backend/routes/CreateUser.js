const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/createuser', async (req, res)=>{
    try {
        await User.create({
            name : 'suman',
            email : 'email',
            password : '123',
            location : 'kolkata'
        })

        res.json({success : true})
    } catch (error) {
        console.log('error while creating user');
        res.json({success : true})
    }
})

module.exports = router;