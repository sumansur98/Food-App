const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "thisisjwtsecret";
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
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPwd,
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
        const pwdMatch =await bcrypt.compare(req.body.password, user.password)
        if(pwdMatch){
            console.log('user found');

            const jwtData = {
                user : {
                    id : user.id
                }
            }
            const authToken = jwt.sign(jwtData, secret);

            res.json({ success: true , authToken : authToken});
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