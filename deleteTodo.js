const clearTodos = () => {
    const list = document.querySelector('#todo-list');
    while(list.hasChildNodes()) {
        list.firstChild.remove();
    }
}

document.querySelector('#clear-all').addEventListener('click', function() {
    clearTodos();
})

document.querySelector('#clear-completed').addEventListener('click', function() {
    clearTodos();
    stillTodos();
})

