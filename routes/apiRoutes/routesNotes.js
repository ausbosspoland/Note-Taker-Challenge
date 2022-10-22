const router = require('express').Router();
const createNewNote = require('../../lib/libnotes');
const notesdb = require('../../notesdb/notesdb.json');

router.get('/notes' , (req, res) => {
    res.json(notesdb);
});

router.post('/notes' , (req, res) => {
    req.body.id = notesdb.length.toString();

    const note = createNewNote(req.body, notesdb);
    res.json(note);
});

module.exports = router;