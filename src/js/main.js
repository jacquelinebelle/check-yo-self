const makeListItemBtn = document.querySelector('#make-item-btn');
const itemInput = document.querySelector('#item-input');
const taskList = document.querySelector('#item-list');

makeListItemBtn.addEventListener('click', makeListItem);

function makeListItem(e) {
    e.preventDefault();
    const listItemEl = `
        <li class="list-item">
            ${itemInput.value}
        </li>
    `;
    taskList.insertAdjacentHTML('beforeend', listItemEl);
}