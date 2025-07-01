// Get references to DOM elements
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function addTask() {
    const taskText = taskInput.value.trim(); // Remove whitespace from both ends

    // Only proceed if the task input is not empty
    if (taskText) {
        // Create a new <li> element
        const taskItem = document.createElement('li');

        // Add the task text and action buttons inside the <li>
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        // Add click event to "Complete" button to toggle completed class
        taskItem.querySelector('.complete').addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });

        // Add click event to "Delete" button to remove the task
        taskItem.querySelector('.delete').addEventListener('click', function () {
            taskItem.remove();
        });

        // Add the <li> to the task list <ul>
        taskList.appendChild(taskItem);

        // Clear the input field for new task
        taskInput.value = '';
    } else {
        // OAlert the user if input is empty
        alert("Please enter a task.");
    }
}

// Add click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add keypress listener for Enter key to trigger task addition
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});