let todos = [];
let completedList = [];
const todoOl = document.querySelector('#todo-list');
const userInput = document.querySelector('#todo-input');

const storeTodo = str => {
    let todo = {
        todoText: str,
        date: new Date(),
        completed: false,
    }
    todos.push(todo);

    return todo;
    
}

const printTodo = (todo) => {
    const makeLi = document.createElement('li');
    makeLi.addEventListener('click', function(event) {
        event.target.style.textDecoration = 'line-through';
        todo.completed = true;
})
    makeLi.innerText = `${todo.todoText} ${todo.date}`;
    todoOl.appendChild(makeLi);
    
}

const printTodos = () => {
    for (const todo of todos) {
        console.log(todo)
        printTodo(todo);
    }
}

document.querySelector('#add-todo').addEventListener('click', function() {
    printTodo(storeTodo(userInput.value))

    userInput.value = '';
})

