var notesContainer = document.getElementById("notes");
//to switch event listener from dbclick to right click, look into oncontextmenu
// notesContainer.addEventListener("dblclick", () => newNote());

printLocalStorage();

function printLocalStorage() {
    getNotes().forEach(note => {
        const noteElement = create(note.id, note.content, note.x, note.y);
        notesContainer.appendChild(noteElement);
    });
}

function getNotes() {
    return JSON.parse(localStorage.getItem("localStorageNotes") || "[]");
  }

  function saveNotes(notes) {
    localStorage.setItem("localStorageNotes", JSON.stringify(notes));
  }

function updateNote(id, updateContent, x, y) {
    const allNotes = getNotes();
    const updatingNote = allNotes.filter((note) => note.id == id)[0];
    updatingNote.content = updateContent;
    updatingNote.x = x;
    updatingNote. y = y;
    saveNotes(allNotes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
    
}

function addNote(event) {
    console.log("addNote is being called");

    const allNotes = getNotes();

    const emptyNote = {
        id: Math.random() * 1000,
        content: "",
        x: 0,
        y: 0,
    };

    emptyNote.x = event.clientX;
    emptyNote.y = event.clientY;
    console.log("hi");


    const newNote = create(emptyNote.id, emptyNote.content, emptyNote.x, emptyNote.y, 'dblclick'); // not passing in an event rn
    notesContainer.appendChild(newNote);

    allNotes.push(emptyNote);
    saveNotes(allNotes);
}

function create(id, content, x, y) {
    //Create the image
    const i = document.createElement("textarea");

    //Set the source of the image
    i.setAttribute("id", "content", "x", "y");
    i.classList.add("note");
    i.id = id;
    i.content = content;
    i.value = content;
    console.log(i.content);
    i.x = x;
    i.y = y;

    // const notesContainer = document.getElementById("notes");
    // notesContainer.appendChild(note); //adds element to website, doesn't save and not permanent

    // allNotes.push(emptyNote);
    // saveNotes(allNotes); //saves notes to localStorage


    // if we're creating a new element
    // if(i.x == 0) {
    //     i.style.left = event.clientX + 'px';
    //     i.style.top = event.clientY + 'px';
    //     i.x = event.clientX;
    //     i.y = event.clientY;      
    // }

    // // if reloading the page
    // else {
    //     i.style.left = i.x + 'px';
    //     i.y = i.y + 'px';
    // }

    //Set CSS styles so it appears where you clicked (Top left corner)
    i.style.position = 'absolute';
    i.style.left     = i.x + 'px';
    i.style.top      = i.y + 'px';
    // i.x = event.clientX;
    // i.y = event.clientY;

    i.addEventListener("change", () => {
        updateNote(i.id, i.value, i.x, i.y);
    });

    i.addEventListener("contextmenu", (e) => {
        // if(e.key == 3) {
            e.preventDefault();
            deleteNote(i.id, i);
        
    });
    
    // starting drag and drop functionality
    // i.addEventListener("ondrag", () => {
    //     console.log('hello');
    //     updateNote(i.id, i.value, event.clientX, event.clientY);
    // });

    return i;
  }
  //Main event listener for clicks
  document.addEventListener('dblclick', addNote);

