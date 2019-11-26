const deleteTodo = index => todos.splice(index, 1);

const clearTodos = () => {
    const list = document.querySelector('#todo-list');
    while(list.hasChildNodes()) {
        list.firstChild.remove();
    }
}

const refreshTodos = () => {
    clearTodos();
}

const indexInput = document.querySelector('#index-input');

const clearCompleted = () => {
    for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
        allLi[i].remove()
    } 
}
}

document.querySelector('#clear-all').addEventListener('click', function() {
    clearTodos();
})

document.querySelector('#clear-completed').addEventListener('click', function() {
    clearCompleted();
})