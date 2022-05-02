/*
    Events Routes
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { fieldValidator } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.use( validateJWT );

// Get events
router.get( '/', getEvents )

// Create events
router.post(
    '/',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom( isDate ),
        check('end', 'End date is required').custom( isDate ),
        fieldValidator
    ],
    createEvent
    );

// Update event
router.put( '/:id', updateEvent );

// Delete event
router.delete( '/:id', deleteEvent );

module.exports = router;