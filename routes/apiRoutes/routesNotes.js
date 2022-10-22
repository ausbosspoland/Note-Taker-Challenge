const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notesdb } = require('../../notesdb/notesdb.json');

router.get('/notes' , (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(notesdb);
});

router.post('/notes' , (req, res) => {
    req.body.id = notesdb.length.toString();

    const note = createNewNote(req.body, notesdb);
    res.json(note);
});

module.exports = router;