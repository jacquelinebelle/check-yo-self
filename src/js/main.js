const inputs = document.querySelectorAll('.form__input')
const itemInput = document.querySelector('#item-input');
const titleInput = document.querySelector('#title-input');
const makeListItemBtn = document.querySelector('#make-item-btn');
const taskList = document.querySelector('#item-list');
const makeListBtn = document.querySelector('#make-list-btn');
const cardContainer = document.querySelector('.card-container');

makeListItemBtn.addEventListener('click', handleTaskClick);
taskList.addEventListener('click', deleteTask);
makeListBtn.addEventListener('click', handleMakeListClick);


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
    if (cards.length === 0) {
        cardContainer.removeChild(emptyMessage);
    }
}

function makeList() {
    const title = titleInput.value;
    const listItems = [...document.querySelectorAll('.list-item-text')];
    const tasks = listItems.map((task, index) => { 
        const taskObj = {id: parseInt(`${index + 1}`), text: task.innerText, checked: false};
        return taskObj;
    });
    const list = new ToDoList(Date.now(), title, tasks);
    return makeCard(list);
}

function makeCard(list) {
    const card = `
        <article class="card"
        data-id=${list.id}>
            <h2>${list.title}</h2>
            ${list.tasks.map(task => {
                return `
                    <p class="task"
                    data-id=${task.id}>
                        ${task.text}
                    </p>
                `;
            })}
        </article>
    `;
    return card;
}

function handleMakeListClick(e) {
    e.preventDefault();
    removeEmptyMessage();
    const newCard = makeList();
    cardContainer.insertAdjacentHTML('afterBegin', newCard);
}