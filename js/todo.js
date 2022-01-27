const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const rmFilter = (item, target) => {
  return item.id !== target.id;
}

const removeToDo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();

  saveToDos();
}

const paintToDo = ({text, id}) => {
  const li = document.createElement('li');
  li.id = id;
  const span = document.createElement('span');
  span.innerText = text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', removeToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ''; 
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }; 
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(typeof(savedToDos));
console.log(savedToDos);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(typeof(parsedToDos));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}