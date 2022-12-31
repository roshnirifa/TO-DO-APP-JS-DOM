document.getElementById('addTaskBtn').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('kjg');
    let newTask = document.getElementById('addNewTaskInput');
    let newTaskValue = newTask.value;
    console.log(newTaskValue);
    newTask.value = ' ';
    // adding new task
    // 1 creating new task
    let input = document.createElement('input');
    input.type = 'checkbox';
    let label = document.createElement('label');
    let li = document.createElement('li');
    label.innerText = newTaskValue;

    let taskContainer = document.getElementById('task');
    taskContainer.appendChild(li)
    taskContainer.appendChild(input)
    taskContainer.appendChild(label)


})




