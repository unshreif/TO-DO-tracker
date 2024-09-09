const list = document.getElementById("tasks");
const button = document.getElementById("add");
const task = document.getElementById("input");

let tasks =  [];

button.addEventListener("click", addTask);

function addTask() {
    tasks.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let li = document.createElement("li");
    let id = li.innerHTML ="<li id='litag'>" + task.value + "</li>";
    list.appendChild(li)
    task.value = "";
    
    document.getElementById("h2").style.display = "block";
    document.getElementById("litag").addEventListener("dblclick", function(){
        li.remove();
        let index = tasks.indexOf(li.innerHTML);
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    
document.getElementById("litag").addEventListener("click", function(){
    document.getElementById("litag").style.textDecoration = "line-through";
    });

}

function show(){
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        list.appendChild(li);
    });
}
show();

