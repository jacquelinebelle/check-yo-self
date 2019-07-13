const makeListItemBtn = document.querySelector('#make-item-btn');
const itemInput = document.querySelector('#item-input');
const taskList = document.querySelector('#item-list');

makeListItemBtn.addEventListener('click', makeListItem);
taskList.addEventListener('click', deleteTask);

function makeListItem(e) {
    e.preventDefault();
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
    taskList.insertAdjacentHTML('beforeend', listItemEl);
}

function deleteTask(e) {
    e.preventDefault();
    const selectedTask = e.target.parentNode.parentNode;
    if (e.target.nodeName === 'IMG') {
        taskList.removeChild(selectedTask);
    }
}