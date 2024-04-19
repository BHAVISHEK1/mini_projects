
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('todoForm');
        const input = document.getElementById('taskInput');
        const todoList = document.getElementById('todoList');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            addTask(input.value);
            input.value = '';
        });

        todoList.addEventListener('change', function (event) {
            if (event.target.type === 'checkbox') {
                toggleTask(event.target.parentElement.dataset.index);
            }
        });

        todoList.addEventListener('click', function (event) {
            if (event.target.classList.contains('delete')) {
                deleteTask(event.target.parentElement.dataset.index);
            }
        });

        loadTasks();
    });

    function addTask(taskText) {
        const tasks = getTasks();
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);
        renderTasks();
    }

    function toggleTask(index) {
        const tasks = getTasks();
        tasks[index].completed = !tasks[index].completed;
        saveTasks(tasks);
        renderTasks();
    }

    function deleteTask(index) {
        const tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    function renderTasks() {
        const tasks = getTasks();
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';

        tasks.forEach(function (task, index) {
            const listItem = document.createElement('li');
            listItem.classList.add('task');
            listItem.dataset.index = index;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            listItem.appendChild(checkbox);

            const taskText = document.createTextNode(task.text);
            listItem.appendChild(taskText);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';
            listItem.appendChild(deleteButton);

            todoList.appendChild(listItem);
        });
    }

    function loadTasks() {
        renderTasks();
    }

