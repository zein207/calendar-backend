
const express = require('express');

// Create express server
const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

// Listen to requests
app.listen( 4000, () => {
    console.log(`Server run on port ${ 4000 }`)
});