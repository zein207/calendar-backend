/*
    User routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
    ], /* <== Middlewares */
    createUser
)

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
    ],
    loginUser
)

router.get('/renew', renewToken)

module.exports = router;