import './styles/main.css';
import { formatDistance, subDays } from 'date-fns'
let Masonry = require('masonry-layout');

let notes= [
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'}
];

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
        const noteContainer = document.createElement('div');
        noteContainer.className = 'noteContainer';
        const noteTitle = document.createElement('h3');
        noteTitle.className = 'noteTitle';
        const noteContent = document.createElement('p');
        noteContent.className = 'noteContent';


        noteContainer.appendChild(noteTitle);
        noteContainer.appendChild(noteContent);
        content.appendChild(noteContainer);

        noteTitle.textContent = notes[i].title
        noteContent.textContent = notes[i].note

        // masonry layout
        let elem = document.querySelector('#content');
        let msnry = new Masonry( elem, {
        // options
        itemSelector: '.noteContainer',
        columnWidth: 10
        });
    }
}

function submitNote(title, note) {
    const newNote = noteTaking(title, note);
    notes.push(newNote);

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

displayNotes()