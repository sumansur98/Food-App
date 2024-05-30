const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post('/createuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],
    async (req, res) => {

        console.log('create user hit')
        console.log(req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('validation errors')
            return res.status(400).json({ errors: errors.array() });

        }

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location
            })
            console.log('user created')
            res.json({ success: true })
        } catch (error) {
            console.log('error while creating user');
            res.json({ success: false })
        }
    })

router.post('/loginuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    console.log('login user hit')
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('validation errors')
        return res.status(400).json({ errors: errors.array() });

    }
    try {
        const email = req.body.email
        const user = await User.findOne({email});
        if(!user){
            console.log('invalid credentials');
            return res.status(400).json({ error: "no user found" })
        }

        if(user.password === req.body.password){
            console.log('user found')
            res.json({ success: true })
        }else{
            console.log('password not match');
            res.json({ success: false })
        }
    } catch (error) {
        console.log('error while creating user');
        res.json({ success: false })
    }

})

module.exports = router;