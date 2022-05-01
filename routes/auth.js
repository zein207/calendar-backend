/*
    User routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
        fieldValidator
    ], /* <== Middlewares */
    createUser
)

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
        fieldValidator
    ],
    loginUser
)

router.get('/renew', validateJWT, renewToken);

module.exports = router;