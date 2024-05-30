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

router.get('/hello', (req, res) => {
    res.send('hello world');
})

module.exports = router;