// script.js

let todos = [];

const todoList = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const deuDateInput = document.getElementById('dueDate');




// renderSongs function which is used 
// to render every to do list item when 
// ever your add a item

const renderTodoList = () => {
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todo.title}</span> 
            <span>${todo.description}</span> 
            <span>${todo.dueDate}</span>
            <button class="edit-btn" data-index="${index}">Edit</button> 
            <button class="delete-btn" data-index="${index}">Delete</button> 
        `;
        todoList.appendChild(todoItem);
    });
}


// add to do item in the list
const addTodo = () => {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = deuDateInput.value;
    newTodo = {title, description, dueDate};
    todos.push(newTodo)
    renderTodoList();
    titleInput.value = '';
    descriptionInput.value = '';
    deuDateInput.value = '';
}


// edit to do list function 
 const editTodo = (index) => {
    const todo = todos[index];
    const title = prompt('Enter your new Title', todo.title);
    const description = prompt('Enter your new Deacription', todo.description);
    const  dueDate = prompt('Enter new due Date', todo.dueDate);
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    renderTodoList();
 }


//  delete function 
const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodoList();
};


// calling events to the buttons
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btn')) {
        const index = event.target.dataset.index;
        editTodo(index);
    } else if (event.target.classList.contains('delete-btn')) {
        const index = event.target.dataset.index;
        deleteTodo(index);
    }
})

renderTodoList();