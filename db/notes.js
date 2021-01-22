const fs = require('fs');
const util = require('util');

// package to generate unique ids



function createNewNote(note, notesArray) {
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify({ note: notesArray}, null, 2)
    );
}; 



function editNote() {

};



function deleteNote() {

};

module.exports = {
    createNewNote,
}