const fs = require('fs');
const path = require('path');

// function to create notes
function createNewNote(body, notesdbArray) {
    const note = body;
    notesdbArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../notesdb/notesdb.json'),
            JSON.stringify(notesdbArray)
    );
    return note;
}


module.exports = createNewNote;