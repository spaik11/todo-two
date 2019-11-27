let todos = [];

const todoOl = document.querySelector('#todo-list');
const userInput = document.querySelector('#todo-input');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const storeTodo = str => {
    let todo = {
        todoText: str,
        date: `${days[new Date().getDay()]}, ${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
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
    makeLi.innerText = `${todo.todoText} (${todo.date})`;
    todoOl.appendChild(makeLi);
}

const stillTodos = () => {
    const falseTodo = todos.filter(todo => todo.completed === false);

    for (const todo of falseTodo) {
        printTodo(todo);
    }
}

document.querySelector('#add-todo').addEventListener('click', function() {
    printTodo(storeTodo(userInput.value));
    userInput.value = '';
})

