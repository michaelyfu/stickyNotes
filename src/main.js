const notesContainer = document.getElementById("notes");
//to switch event listener from dbclick to right click, look into oncontextmenu
notesContainer.addEventListener("click", () => newNote());

// getNotes().forEach((note) => {
//     console.log(note);
//   });

function getNotes() {
    return JSON.parse(localStorage.getItem("allNotes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("allNotes", JSON.stringify(notes)) 
}

function newNote() {
    const allNotes = getNotes();

    const emptyNote = {
        id: 10000,
        content: ""
    };

    const note = document.createElement("textarea");
    note.classList.add("note");
    note.id = emptyNote.id;
    note.content = emptyNote.content;

    const element = document.getElementById("notes");
    element.append(note);

    allNotes.push(note);
    saveNotes(allNotes);

    note.addEventListener("change", () => {
        updateNote(note.id, note.content);
    });
}

function updateNote(id, updateContent) {

    const allNotes = getNotes();
    const updatingNote = allNotes.filter((note) => note.id == id)[0];
    updatingNote.content = "apples";
    saveNotes(allNotes);
}

function deleteNote() {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}