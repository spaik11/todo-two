let todos = [];
const todoOl = document.querySelector('#todo-list');
const userInput = document.querySelector('#todo-input');

const storeTodo = str => {
    todos.push({
        todoText: str,
        date: new Date(),
        completed: false,
    })
};

const printTodo = todo => {
    const makeLi = document.createElement('li');
    makeLi.innerText = todo;
    todoOl.appendChild(makeLi);
}

const printTodos = () => {
    for (const todo of todos) {
        printTodo(todo);
    }
}

document.querySelector('#add-todo').addEventListener('click', function() {
    storeTodo(userInput.value);
    printTodo(userInput.value)
    userInput.value = '';
})

