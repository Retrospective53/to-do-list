// import './styles/main.css';
// import { formatDistance, subDays } from 'date-fns'

// // function noteTaking(title, note)  {
// //     return {title, note};
// // }



const content = document.getElementById('content');

const noteContainer = document.createElement('div');
noteContainer.className = 'noteContainer';
const noteTitle = document.createElement('h3');
noteTitle.className = 'noteTitle';
const noteContent = document.createElement('p');
noteContent.className = 'noteContent';


noteContainer.appendChild(noteTitle);
noteContainer.appendChild(noteContent);
content.appendChild(noteContainer);


noteTitle.textContent = 'lololol'
noteContent.textContent = 'hahahahaha'

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
    {title: 'aqua', note: 'ariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssssariassssssssssssssssss'},

];

const noteTaking = (title, note) => {
    return {title, note}
  }

function displayNote(title, note) {
    const newNote = noteTaking(title, note);
    notes.push(newNote);

    notesToDelete = document.querySelectorAll('.noteContainer');
    for (let i = 0; i < notesToDelete.length; i++) {
        notesToDelete[i].remove();
    }
    

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
    }
    
}

displayNote();