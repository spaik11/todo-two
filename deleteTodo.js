const deleteTodo = index => todos.splice(index, 1);

const clearTodos = () => {
    const list = document.querySelector('#todo-list');
    while(list.hasChildNodes()) {
        list.firstChild.remove();
    }
}

const refreshTodos = () => {
    clearTodos();
    printTodos();
}

const indexInput = document.querySelector('#index-input');

document.querySelector('#remove-todo').addEventListener('click', function() {
    deleteTodo(indexInput.value, 1);
    refreshTodos();
    indexInput.value = '';
})