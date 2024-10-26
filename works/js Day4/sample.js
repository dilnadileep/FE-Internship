
//DOM elements
const mainhead = document.getElementById('mainhead');
const maindiv = document.getElementById('maindiv');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');
const completeTaskBtn = document.getElementById('completeTaskBtn');


// Add a new task
addTaskBtn.addEventListener('click', function () {
    const taskValue = taskInput.value;

    if (taskValue) {

        const newTask = document.createElement('li');
        newTask.textContent = taskValue;

        newTask.style.backgroundColor = '#f4f4f4';
        newTask.style.color = '#333';
        newTask.style.fontFamily='italic';

        taskList.appendChild(newTask);

        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
});

removeTaskBtn.addEventListener('click', function () {
    const lastTask = taskList.lastElementChild;
    if (lastTask) {
        taskList.removeChild(lastTask);
    } else {
        alert('No tasks to remove');
    }
});

completeTaskBtn.addEventListener('click', function () {
    const firstTask = taskList.firstElementChild;
    if (firstTask) {
        firstTask.classList.add('completed');
    } else {
        alert('No tasks to complete');
    }
});


//button styling
function applyHoverEffect(button) {

    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.style.borderRadius = '2px'; 
    button.style.border = '1px solid black'; 
    button.style.padding = '5px'; 

    button.addEventListener('mouseout', function () {
    
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.style.borderRadius = '2px'; 
        button.style.border = '1px solid black'; 
        button.style.padding = '5px'; 

    
    });
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#0466ce';
        button.style.color = 'white';
        button.style.borderRadius = '2px'; 
        button.style.border = '1px solid #fff';  
        button.style.padding = '5px'; 

    });
    

    }
    applyHoverEffect(addTaskBtn);
    applyHoverEffect(removeTaskBtn);
    applyHoverEffect(completeTaskBtn);
    
    //input styling 
    
    taskInput.style.margin = '20px'; 
    taskInput.style.height = '25px'; 
    taskInput.style.width = '200px';
    taskInput.style.marginLeft = '50px';
    
    
    //headding styling 
    
    mainhead.style.textAlign = 'center';
    mainhead.style.color = 'center';
    
    
    //main div styling 
    
    maindiv.style.textAlign = 'center';
    maindiv.style.margin = '60px';
    maindiv.style.backgroundColor = 'rgb(241, 238, 238)';
    