document.querySelector('#display-all').addEventListener('click', function() {
    clearTodos();
    
    for (const todo of todos) {
        printTodo(todo);
    }
})
