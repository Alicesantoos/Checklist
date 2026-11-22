function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === '') {
        alert("Digite algo para adicionar!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = taskText;

    // Marcar/desmarcar tarefa
    li.addEventListener("click", function() {
        this.classList.toggle("checked");
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});