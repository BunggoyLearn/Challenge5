// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const toDo = $('#todo-cards')
const titleDo = $('<h3>')
const dateDo = $('<h4>')
const desDo = $('<p>')
const card = ('.card')

// Todo: create a function to generate a unique task id
function generateTaskId() {

        const idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
      do {
        const ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
          idstr += String.fromCharCode(ascicode);
        }
      } while (idstr.length < 32);
    
      return (idstr);
    }
    console.log(generateTaskId());


// Todo: create a function to create a task card
function createTaskCard(task) {
    $('<li class=card> </li>').appendto('#todo-cards');
    $('<li class=card> </li>').appendto("#in-progress-cards");
    $('<li class=card> </li>').appendto("#done-cards");

    titleDo.text('');
    dateDo.text('');
    desDo.text('');

    card.append(titleDo);
    card.append(dateDo);
    card.append(desDo);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
