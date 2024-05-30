'use strict!';

let hardcodedComments = [
  {
    id: 1,
    username: 'Lucian',
    text: 'Un text foarte interesant!',
  },
  {
    id: 2,
    username: 'Maria',
    text: 'As fi dorit mai multe detalii, dar per total mi-a placut!',
  },
  {
    id: 3,
    username: 'Andrei',
    text: 'Un text concis si foarte interesant!',
  },
  {
    id: 4,
    username: 'Alina',
    text: 'Mi-a placut foarte mult stilul!',
  },
];
let container = document.getElementById('container');
console.log(container);

function genereazaContinut() {
  container.innerHTML = '';
  hardcodedComments.forEach((comment, index) => {
    container.innerHTML += ` 
    
    <div class="container">   
    <div class="card ">
      <div class="card-header" id='${comment.username + comment.id}'>
            Comment nr. ${comment.id}
            <div class="d-grid  d-md-flex justify-content-md-end">
                <button onclick='stergeComment(${index})' type="button" class="btn btn-outline-dark me-md-2">X</button>

            </div>
        </div>
        <div class="card-body">
            <blockquote  class="blockquote mb-0">
                <p>${comment.text}</p>
                <footer class="blockquote-footer">added by <cite title="Source  Title">${
                  comment.username
                }</cite></footer>
            </blockquote>
            </div>
            </div>
            </div>
            <style>
            .card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;  
            }
            </style>
            `;
  });
}

genereazaContinut();

function stergeComment(id) {
  console.log(id);
  hardcodedComments.splice(id, 1);
  genereazaContinut();
}

const sendButton = document.querySelector('#send');
const newComment = document.querySelector('#newComment');
const yourName = document.querySelector('#name');
console.log(sendButton);
console.log(newComment);
console.log(yourName);

sendButton.addEventListener('click', function () {
  let newCommentText = newComment.value;
  let yourNameText = yourName.value;
  if (!newCommentText && !yourNameText) return;
  console.log(newCommentText, yourNameText);
  const maxId = Math.max(...hardcodedComments.map(comment => comment.id));
  hardcodedComments.push({
    id: maxId + 1,
    username: yourNameText,
    text: newCommentText,
  });

  newComment.value = '';
  console.log(hardcodedComments);
  genereazaContinut();
});

// click pe 1 buton sa adaugam in array un alt obiect cu id incrementat si textul respectiv
//

// let hardcodedComments = [
//   {
//     id: 1,
//     username: 'Doruta',
//     text: 'Un text foarte interesant',
//   },
//   {
//     id: 2,
//     username: 'Ana',
//     text: 'Captivant!',
//   },
//   {
//     id: 3,
//     username: 'Alexandru',
//     text: 'Sunt impresionat!',
//   },
//   {
//     id: 4,
//     username: 'Radu',
//     text: 'Minunat!',
//   },
// ];

// let container = document.getElementById('container');

// function genereazaContinut() {
//   container.innerHTML = '';
//   hardcodedComments.forEach((comment, index) => {
//     container.innerHTML += `<div id="${
//       comment.username + comment.id
//     }"><textarea>${
//       comment.text
//     }</textarea><button onclick= 'stergeComment(${index})'>X</button></div>`;
//   });
// }
// genereazaContinut();
// function stergeComment(id) {
//   console.log(id);
//   hardcodedComments.splice(id, 1);
//   genereazaContinut();
// }
