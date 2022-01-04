const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes() {
    return JSON.parse(localStorage.getItem("allNotes"));
}

function saveNotes(notes) {
    localStorage.setItem("allNotes", JSON.stringify(notes)) //JSON.stringify(notes)
}

function newNote(id, content) {
    const add = document.createElement("textarea");
    const node = document.createTextNode(content);
    add.append(node);
    const element = document.getElementById("notes");
    element.append(add);
}

function updateNote() {

}

function deleteNote() {

}