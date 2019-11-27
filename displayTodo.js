const printAllTodo = () => {
    for (const todo of todos) {
        printTodo(todo);
    }
}

document.querySelector('#display-all').addEventListener('click', function() {
    clearTodos();
    printAllTodo();
})
