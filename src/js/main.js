const inputs = document.querySelectorAll('.form__input')
const itemInput = document.querySelector('#item-input');
const titleInput = document.querySelector('#title-input');
const makeListItemBtn = document.querySelector('#make-item-btn');
const taskList = document.querySelector('#item-list');
const makeListBtn = document.querySelector('#make-list-btn');
const cardContainer = document.querySelector('.card-container');

makeListItemBtn.addEventListener('click', handleTaskClick);
taskList.addEventListener('click', deleteTask);
makeListBtn.addEventListener('click', makeList);


function clearInputs() {
    inputs.forEach(input => input.value = '');
}

function handleTaskClick(e) {
    e.preventDefault();
    const formDiv = document.querySelector('.form__div');
    if (itemInput.value !== '') {
        makeListItem();
    }
    // } else {
    //     showErrorMessage(formDiv, 'Please enter a task :)');
    // }
    clearInputs();
}

// function showErrorMessage(placement, message) {
//     const error = `
//         <p class="error">${message}</p>
//     `;
//     if () {
//         placement.insertAdjacentHTML('afterEnd', error);
//     } else {
//         placement.removeChild(error);
//     }
// }

function makeListItem() {
    const listItemEl = `
        <li class="list-item">
            <button
            id="delete-task-btn" 
            class="delete-task-btn">
                <img 
                class="task-svg"
                src="./src/assets/delete.svg" />
            </button>
            <p class="list-item-text">
                ${itemInput.value}
            </p>
        </li>
    `;
    taskList.insertAdjacentHTML('beforeEnd', listItemEl);
}

function deleteTask() {
    const selectedTask = e.target.parentNode.parentNode;
    if (e.target.nodeName === 'IMG') {
        taskList.removeChild(selectedTask);
    }
}

function removeEmptyMessage() {
    const cards = cardContainer.querySelectorAll('.card');
    const emptyMessage = document.querySelector('#empty-message');
    if (cards.length > 0) {
        cardContainer.removeChild(emptyMessage);
    }
}

function makeList(e) {
    e.preventDefault();
    removeEmptyMessage();
    const title = titleInput.value;
    const listItems = [...document.querySelectorAll('.list-item-text')];
    const tasks = listItems.map(task => task.innerText);
}