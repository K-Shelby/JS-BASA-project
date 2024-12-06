const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

export function addTask() {
    const taskText = taskInput.value.trim();
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    taskSpan.addEventListener('dblclick', function() {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskSpan.textContent;
        input.className = 'edit-input';

        li.replaceChild(input, taskSpan);
        input.focus();

        input.addEventListener('blur', function() {
            const newText = input.value.trim();
            taskSpan.textContent = newText;
            li.replaceChild(taskSpan, input);
        });

        input.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    });
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.color = '#888';
        } else {
            taskSpan.style.textDecoration = 'none';
            taskSpan.style.color = '#000';
        }
    });

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Удалить задачу';
    deleteTask.className = 'delete-button';

    deleteTask.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteTask);
    
    taskList.appendChild(li);
    taskInput.value = '';
    

    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll('li');
        
        tasks.forEach(task => {
            const checkbox = task.querySelector('.task-checkbox');
            switch(filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    task.style.display = checkbox.checked ? 'flex' : 'none';
                    break;
                case 'active':
                    task.style.display = !checkbox.checked ? 'flex' : 'none';
                    break;
            }
        });
    }
    document.getElementById('showAll').addEventListener('click', () => filterTasks('all'));
    document.getElementById('showCompleted').addEventListener('click', () => filterTasks('completed'));
    document.getElementById('showActive').addEventListener('click', () => filterTasks('active'));
}

addButton.addEventListener('click', addTask);