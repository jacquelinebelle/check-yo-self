class ToDoList {
    constructor(id, title, tasks) {
        this.id = id;
        this.title = title;
        this.urgent = false;
        this.tasks = tasks;
    }

    saveToStorage(lists) {
        localStorage.setItem('storedLists', JSON.stringify(lists));
    }

    deleteFromStorage() {

    }

    updateToDo() {
        // updates title and urgency
    }

    updateTask() {
        // when task completed
        // update content
    }
}