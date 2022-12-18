// import './styles/main.css';
// import { formatDistance, subDays } from 'date-fns'
// let Masonry = require('masonry-layout');

let notes= [];
let notesLocalStorage = JSON.parse(localStorage.getItem('notes'));
if (notesLocalStorage === null) {
    notesLocalStorage = [
        {title: 'Home renovation', note: 'buy hammer'}
    ]
}

function masonryLayOut() {
    // masonry layout
    let elem = document.querySelector('#content');
    let msnry = new Masonry( elem, {
    // options
    itemSelector: '.noteContainer',
    columnWidth: 10
    });
}

notesLocalStorage.forEach(noteLocalStorage => {
    notes.push(noteLocalStorage);
})



const noteTaking = (title, note) => {
    return {title, note}
  }

function clearNotes() {
    const notesToDelete = document.querySelectorAll('.noteContainer');
    for (let i = 0; i < notesToDelete.length; i++) {
        notesToDelete[i].remove();
    }
}


function displayNotes() {
    for (let i = 0; i < notes.length; i++) {

        // create container for the note
        const noteContainer = document.createElement('div');
        noteContainer.className = 'noteContainer';
        const noteTitle = document.createElement('input');
        noteTitle.className = 'noteTitle';
        const noteContent = document.createElement('textarea');
        noteContent.className = 'noteContent';

        // create button
        const buttonContainer = document.createElement('div');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const saveButton = document.createElement('button');
        buttonContainer.className = 'buttonContainer';
        deleteButton.className = 'deleteButton';
        saveButton.className = 'saveButton';

        editButton.textContent = 'Edit'
        deleteButton.textContent = 'Delete'
        saveButton.textContent = 'Save'
        
        // insert into html
        noteContainer.appendChild(noteTitle);
        noteContainer.appendChild(noteContent);
        content.appendChild(noteContainer);

        buttonContainer.appendChild(saveButton);
        buttonContainer.appendChild(deleteButton);
        noteContainer.appendChild(buttonContainer);

        // change the value for the content
        noteTitle.value = notes[i].title
        noteTitle.type = 'text'
        noteContent.textContent = notes[i].note
        noteContent.type = 'text'

        // save everytime 
        saveButton.addEventListener('click', () => {
            notes[i].title = noteTitle.value;
            notes[i].note = noteContent.value;
            localStorage.setItem('notes', JSON.stringify(notes));
        })

        // delete note
        deleteButton.addEventListener('click', () => {
            notes.splice(i,1);
            noteContainer.remove();
            localStorage.setItem('notes', JSON.stringify(notes));
            masonryLayOut();
        })

        // noteTitle.addEventListener('keypress', () => {
            
        // })

        masonryLayOut();
    }
}

function submitNote(title, note) {
    const newNote = noteTaking(title, note);
    notes.push(newNote);

    // store to localstorage
    localStorage.setItem('notes', JSON.stringify(notes));

    clearNotes();
    displayNotes();
}

// edit note
function changeNote(title, note, index) {
    notes[index].title = title
    notes[index].note = note
}

const popUpForm = document.createElement('div');
const formContainer = document.createElement('div');

const formNote = document.createElement('form');
const labelTitle = document.createElement('label');
const labelNote = document.createElement('input');

//Button Submit
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
})

const titleForm = document.getElementById('title')
const noteForm = document.getElementById('note')

function submitForm() {
    submitNote(titleForm.value , noteForm.value)
}

btnSubmit.addEventListener('click', submitForm);

// notification
const notifContainer = document.createElement('notifContainer');
notifContainer.id = 'notifContainer';
content.appendChild(notifContainer);

function notificationPop() {
    const notif = document.createElement('notif');
    notif.className = 'notif';
    notif.textContent = 'Note Added';
    notifContainer.appendChild(notif);
    setTimeout(() => {
        notif.remove()
    }, 3000);
}

btnSubmit.addEventListener('click', notificationPop);
displayNotes();