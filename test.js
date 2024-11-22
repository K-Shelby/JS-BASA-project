let array = [
    {
        name: 'Подъём в 8:00',
        complete: false,
    },
    {
        name: 'Утренняя зарядка',
        complete: false,
    },
    {
        name: 'Завтрак', 
        complete: false,
    },
    {
        name: 'Тренировка',
        complete: false,
    },
]


function createTask (name) {
    if (!name || name.trim() === '') {
        console.log('Ошибка: Название задачи не может быть пустым!');
        return;
    }
    const task = {
        name: name,
        complete: false,
    };
    array.push(task);
}

createTask('Обед');




function toggleTaskStatus (index) {
    array[index].complete = !array[index].complete;
}
toggleTaskStatus(0);
toggleTaskStatus(1);



function deleteTask (name) {
    const index = array.findIndex(task => task.name === name);
    if (index !== -1) {
        array.splice(index, 2);
    } else {
        console.log('Задача не найдена!');
    }
}

deleteTask('Подъём в 8:00');
console.log(array);

function showAllTasks() {
    array.forEach((task, index) => {
        const status = task.complete ? 'выполнена' : 'не выполнена';
        console.log(`${index + 1}. ${task.name} - ${status}`);
    });
}

showAllTasks();

