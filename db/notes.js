const fs = require('fs');
const util = require('util');

// package to generate unique ids



function createNewNote(note, notesArray) {
    const newNote = note;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify({ newNote: notesArray}, null, 2)
    );
    return newNote;
}; 

function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
}

function editNote(editedNote, notesArray) {

};



function deleteNote() {

};

module.exports = {
    createNewNote,
    findById,
}