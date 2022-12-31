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
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.className = 'deleteBtn'
    label.innerText = newTaskValue;

    let taskContainer = document.getElementById('task');
    taskContainer.appendChild(li)
    taskContainer.appendChild(input)
    taskContainer.appendChild(label)
    taskContainer.appendChild(btn)


})
// // delete btn
// let delBtns = document.getElementsByClassName('deleteBtn');
// // console.log(delBtns);
// for (let delBtn of delBtns) {
//     // console.log(delBtn);
//     delBtn.addEventListener('click', function () {
//         console.log('fgds');
//         let taskContainer = document.getElementById('task');
//         taskContainer.style.display = 'none'

//     })
// }







