const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const tasks = [];

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    addTask(taskText);
    taskForm.reset();
    renderTasks();
});

function createTask(text) {
    return { description: String(text), state: false};
}

function addTask(text) {
    tasks.push(createTask(text));
    return tasks.sort((a, b) => a.state - b.state);
}

function toggleCompleted(index) {

    tasks[index].state = !tasks[index].state;
    tasks.sort((a, b) => a.state - b.state);
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.classList.toggle("completed", task.state);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.state;
        checkbox.addEventListener("change", () => toggleCompleted(index));

        const textSpan = document.createElement("span");
        textSpan.textContent = task.description;
        textSpan.addEventListener("click", () => toggleCompleted(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.addEventListener("click", () => deleteTask(index));

        li.appendChild(checkbox);
        li.append(textSpan);
        li.append(deleteBtn);

        
        taskList.appendChild(li);
    });
}