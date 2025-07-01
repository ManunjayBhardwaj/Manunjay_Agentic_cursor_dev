document.getElementById('add-todo').addEventListener('click', () => {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');
        newTodo.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';

        deleteBtn.onclick = () => {
            todoList.removeChild(newTodo);
        };

        newTodo.appendChild(deleteBtn);
        todoList.appendChild(newTodo);
        todoInput.value = '';
    }
});