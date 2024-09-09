const list = document.getElementById("tasks");
const button = document.getElementById("add");
const taskInput = document.getElementById("input");

let tasks = [];

function show() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task);
    });
}


function createTaskElement(taskValue) {
    let li = document.createElement("li");
    li.textContent = taskValue;
    list.appendChild(li);
    
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });
    
    li.addEventListener("dblclick", function () {
        li.remove();
        let index = tasks.indexOf(taskValue);
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

button.addEventListener("click", function () {
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    tasks.push(taskValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTaskElement(taskValue);
    taskInput.value = "";

    document.getElementById("h2").style.display = "block";
});

show();
