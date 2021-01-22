const router = require('express').Router;
const noteData = require('../db/notes');

//API ROUTES: 
// GET /api/notes should read the db.json file 
// return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.json(noteData);
});

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, 
// and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
    req.body = noteData.length.toString();

    res.json(noteData);
})

module.exports = router;