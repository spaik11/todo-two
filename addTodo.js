let todos = [];
let completedList = [];
const todoOl = document.querySelector('#todo-list');
const userInput = document.querySelector('#todo-input');

const storeTodo = str => {
    todos.push({
        todoText: str,
        date: new Date(),
        completed: false,
    })
}

const printTodo = (todo) => {
    const makeLi = document.createElement('li');
    makeLi.innerText = `${todo}`;
    todoOl.appendChild(makeLi);

}

const printTodos = () => {
    for (const todo of todos) {
        printTodo(todo);
    }
}

document.querySelector('#add-todo').addEventListener('click', function() {
    storeTodo(userInput.value);
    printTodo(userInput.value);
    const allLi = document.querySelectorAll('#todo-list li');

    for (let i = 0; i < allLi.length; i++) {
        allLi[i] = allLi[i].addEventListener('click', function() {
            event.target.style.textDecoration = 'line-through';
            todos[i].completed = !todos[i].completed;
            completedList.push(todos[i])
    })
}
    userInput.value = '';
})

