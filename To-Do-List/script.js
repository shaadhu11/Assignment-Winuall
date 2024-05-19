let taskList = [];

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        if (task.completed) {
            listItem.classList.add('completed');
        }
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
            <span>${task.name}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(listItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        taskList.push({ name: taskName, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

// Initial rendering
renderTasks();
