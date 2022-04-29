const { response } = require('express');
const User = require('../models/User');


const createUser = async (req, res = response) => {

    // const { name, email, password } = req.body;

    try {

        const user = new User( req.body );
    
        await user.save();
    
        res.status(201).json({
            ok: true,
            msg: 'register'
        });
        
    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }

}

const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}