const notesContainer = document.getElementById("notes");
const addNoteButton = notesContainer.querySelector(".add-note");

addNoteButton.addEventListener("click", () => newNote(1, "hi"));

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

function updateNote(id, content) {
    const newElement = document.createElement("textarea");
    newElement.addEventListener("change", () => {
        updateNote(id, newElement.value);
    });
}

function deleteNote() {
    
}