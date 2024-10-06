const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


function addDailyTask() {
    const textInput = inputTask.value.trim();

    if (textInput === "") {
        alert("Please Enter Your Task")
        return;
    }


    const tasks = document.createElement('li');
    tasks.textContent = textInput;


    tasks.addEventListener('click', () => {
        tasks.classList.toggle('completed')
    });


    // create a delete button for deleting task

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'X';
    deleteTask.classList.add('delete');

    deleteTask.addEventListener('click' , () => {
        taskList.removeChild(tasks);
    })

    const updateTask = document.createElement('button');
    updateTask.textContent = 'edit';
    updateTask.classList.add('updateTaskInList');

    updateTask.addEventListener('click', () => {
        const editTask = document.createElement('input');
        editTask.type = 'text';
        editTask.value = tasks.textContent;


        const saveButton = document.createElement('button');
        saveButton.textContent = 'save';


        tasks.replaceChild(editTask, tasks);
        tasks.replaceChild(saveButton, updateTask);

        
        saveButton.addEventListener('click', () => {
          tasks.textContent = editTask.value;
          tasks.replaceChild(tasks, editTask)      
          tasks.replaceChild(updateTask, saveButton);      
        })
    })




    // append the childrens according to needs
    tasks.appendChild(deleteTask);
    taskList.appendChild(tasks);
    taskList.appendChild(updateTask);


    textInput.value = '';

}


addTask.addEventListener('click', addDailyTask);


inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addDailyTask()
    }
})