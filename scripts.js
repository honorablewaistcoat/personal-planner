document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const scheduleForm = document.getElementById('schedule-form');
    const scheduleList = document.getElementById('schedule-list');
    const notesInput = document.getElementById('notes-input');
    const saveNotesButton = document.getElementById('save-notes');
    const habitForm = document.getElementById('habit-form');
    const habitList = document.getElementById('habit-list');
    const brainDumpInput = document.getElementById('brain-dump-input');
    const saveBrainDumpButton = document.getElementById('save-brain-dump');

    // Task Manager
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.getElementById('task-input').value;
        const priority = document.getElementById('priority').value;
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskInput} <span>${priority}</span> <button class="delete-task">X</button>`;
        taskList.appendChild(taskItem);
        taskForm.reset();

        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });

    // Schedule
    scheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const scheduleInput = document.getElementById('schedule-input').value;
        const scheduleTask = document.getElementById('schedule-task').value;
        const scheduleItem = document.createElement('li');
        scheduleItem.innerHTML = `${scheduleInput}: ${scheduleTask} <button class="delete-schedule">X</button>`;
        scheduleList.appendChild(scheduleItem);
        scheduleForm.reset();

        scheduleItem.querySelector('.delete-schedule').addEventListener('click', () => {
            scheduleList.removeChild(scheduleItem);
        });
    });

    // Notes
    saveNotesButton.addEventListener('click', () => {
        localStorage.setItem('notes', notesInput.value);
    });

    if (localStorage.getItem('notes')) {
        notesInput.value = localStorage.getItem('notes');
    }

    // Habit Tracker
    habitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const habitInput = document.getElementById('habit-input').value;
        const habitItem = document.createElement('li');
        habitItem.innerHTML = `${habitInput} <button class="delete-habit">X</button>`;
        habitList.appendChild(habitItem);
        habitForm.reset();

        habitItem.querySelector('.delete-habit').addEventListener('click', () => {
            habitList.removeChild(habitItem);
        });
    });

    // Brain Dump
    saveBrainDumpButton.addEventListener('click', () => {
        localStorage.setItem('brainDump', brainDumpInput.value);
    });

    if (localStorage.getItem('brainDump')) {
        brainDumpInput.value = localStorage.getItem('brainDump');
    }
});
