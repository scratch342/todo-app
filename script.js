const input = document.querySelector('input');
const submit = document.querySelector('.submit-todo');
const todos = document.querySelector('.todos')

const submitTodo = () => {
	let newTodoValue = input.value;
	let newTodo = document.createElement('li');
	newTodo.textContent = newTodoValue;
	todos.appendChild(newTodo);
}

submit.addEventListener("click", submitTodo);

