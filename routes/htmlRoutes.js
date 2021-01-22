const path = require('path');
const router = require('express').Router;

//HTML Routes needed:
// GET /notes(should return notes.html file)
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// GET * (should retrun index.html file)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});




module.exports = router;