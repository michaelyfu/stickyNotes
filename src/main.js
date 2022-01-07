var notesContainer = document.getElementById("notes");
//to switch event listener from dbclick to right click, look into oncontextmenu
// notesContainer.addEventListener("dblclick", () => newNote());

printLocalStorage();

function printLocalStorage() {
    // const note = document.createElement("textarea");
    // notesContainer.innerHTML += localStorage.getItem("localStorageNotes");
    // getNotes().forEach((note) => {
    //     // const printedNote = document.createElement("textarea");
    //     // // printedNote.setAttribute("id", "content");
    //     // // printedNote.classList.add("note");
    //     // // printedNote.id = note.id;
    //     // printedNote.value = note.content;

    //     notesContainer.appendChild(note);


    const allItems = JSON.parse(localStorage.getItem("localStorageNotes"));
    console.log(allItems);
    // allItems.forEach(note => document.body.appendChild(note));
}
//     for(let i = 0; i < getNotes().length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);

//         const note = document.createElement("textarea");
//         note.setAttribute("id", "content");
//         note.classList.add("note");
//         note.content = value;

//         notesContainer.appendChild(note);
//     }
// }

function getNotes() {
    return JSON.parse(localStorage.getItem("localStorageNotes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("localStorageNotes", JSON.stringify(notes)) 
}

// function newNote() {
//     const allNotes = getNotes();

//     const emptyNote = {
//         id: Math.random() * 1000,
//         content: ""
//     };

//     const note = document.createElement("textarea");
//     note.setAttribute("id", "content");
//     note.classList.add("note");
//     note.id = emptyNote.id;
//     note.content = emptyNote.content;

//     const notesContainer = document.getElementById("notes");
//     notesContainer.appendChild(note); //adds element to website, doesn't save and not permanent

//     allNotes.push(emptyNote);
//     saveNotes(allNotes); //saves notes to localStorage

//     note.addEventListener("change", () => {
//         updateNote(note.id, note.value);
//     });

//     note.addEventListener("click", () => {
//         deleteNote(note.id, note);
//     });
    
//     // console.log(typeof emptyNote);
// }

function updateNote(id, updateContent) {

    const allNotes = getNotes();
    const updatingNote = allNotes.filter((note) => note.id == id)[0];
    updatingNote.content = updateContent;
    saveNotes(allNotes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
    
}


function create(event) {
    //Create the image
    var i = document.createElement("textarea");
  
    const allNotes = getNotes();

    const emptyNote = {
        id: Math.random() * 1000,
        content: ""
    };

    //Set the source of the image
    i.setAttribute("id", "content");
    i.classList.add("note");
    i.id = emptyNote.id;
    i.content = emptyNote.content;

    // const notesContainer = document.getElementById("notes");
    // notesContainer.appendChild(note); //adds element to website, doesn't save and not permanent

    allNotes.push(emptyNote);
    saveNotes(allNotes); //saves notes to localStorage
  
    //Set CSS styles so it appears where you clicked (Top left corner)
    i.style.position = 'absolute';
    i.style.left     = event.clientX + 'px';
    i.style.top      = event.clientY + 'px';

    i.addEventListener("change", () => {
        updateNote(i.id, i.value);
    });

    i.addEventListener("click", () => {
        deleteNote(i.id, i);
    });
    
    //Add it to the body of the document
    notesContainer.appendChild(i);
  }
  //Main event listener for clicks
  document.addEventListener('dblclick', create);
