const inputElement = document.getElementById('textInput');
const form_container = document.getElementById('form_modal');
const createBtn = document.getElementById('create_btn');
const plusBtn = document.getElementById('plus_btn');
const checkbox = document.querySelectorAll('.check_label');
const tasks = document.querySelectorAll('label');
const initialLength = tasks.length;
const counter = document.getElementById('counter');
let completedTasks;



/* Shuffling the focus section... */
const focus_check = checkbox[0];
const task_normal_top = checkbox[1];
const focus_task_container = document.getElementById('focus_task_div');

focus_check.addEventListener('click',()=>{
    focus_check.parentElement.remove();
    console.log(focus_task_container);
    task_normal_top.parentElement.classList.add('focus_body');
    focus_task_container.appendChild(task_normal_top.parentElement);
})

//Making the modal disappear when enter is clicked....
inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        form_container.classList.remove('appear'); // Replace 'yourClassName' with your desired class name
    }
});


//Making the modal disappear when plusBtn is clicked...
plusBtn.addEventListener('click', (e) => {
    form_container.classList.remove('appear');
});

//Making the modal reappear when createBtn is clicked....
createBtn.addEventListener('click', (e) => {
    form_container.classList.add('appear');
});

//Preventing the form from being submitted... 
form_container.addEventListener('submit', (e) => {
    e.preventDefault();
    // window.location.reload();
});

checkbox.forEach((label) => {
    label.addEventListener('click', () => {
        console.log(label);
        label.parentElement.remove();
        const newTasks = document.querySelectorAll('label');
        const finalLength = newTasks.length;
        completedTasks = initialLength - finalLength;
        counter.innerText = completedTasks;
    })
});








