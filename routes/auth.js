const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');



router.post('/register', async (req, res) => {
    // Validate data before creating the user
    const {error,value} = registerValidation(req.body);

    if (error) {
        return res.status(400).send({
            error: 'Validation error',
            details: error.details[0].message
        });
    }
    //checking if the user already in the DB
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('email already exists');
     //hash password
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(value.password, salt);
    //creating a new user

    const user = new User({
        name: value.name,
        email: value.email,
        password: hashPassword,
    });

    try {
        const savedUser = await user.save();
        res.status(201).send({user: user._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

//login
router.post('/login',async (req,res)=>{
    const {error,value} = loginValidation(req.body);

    if (error) {
        return res.status(400).send({
            error: 'Validation error',
            details: error.details[0].message
        });
    };
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('email is wrong');
    //password is correct
    const validPass = await bcrypt.compare(value.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);


});






module.exports = router;
