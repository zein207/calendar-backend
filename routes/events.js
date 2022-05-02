/*
    Events Routes
    host + /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.use( validateJWT );

// Get events
router.get( '/', getEvents )

// Create events
router.post( '/', createEvent );

// Update event
router.put( '/:id', updateEvent );

// Delete event
router.delete( '/:id', deleteEvent );

module.exports = router;