import './style.css';
import {
  getAllTodos, addTodo, removeTodo, editTodo, isCompleted, clearAllCompleted,
} from './todo';

const showToDo = (todo) => `<li class="item">
                    <input class="check" type="checkbox" value="${todo.index}"/>
                     <span class="desc" data-index="${todo.index}" contentEditable="true"> ${todo.description} </span>
                    <button class="trash" value="${todo.index}">
                       <i class="fa fa-trash"></i>
                    </button>
                </li><hr/>`;

const cardComponent = () => `<section class="card">
        <div>
            <div class="card-title">
                <h2> Today's To Do <span> <i class="fa fa-retweet"></i> </span>
                </h2>
            </div><hr/>
            <div class="form-div">
                <form class="todo-form">
                    <input class="form-control" name="description" type="text" placeholder="Add to your list"/>
                </form>
            </div><hr/>
            <ul class="todos">
            </ul>
            <div class="card-footer">
                <a class="clear" href="#"> Clear all completed </a>
            </div>
        </div>
    </section>`;

const main = document.querySelector('main');
main.innerHTML = cardComponent();

const todos = document.querySelector('.todos');
const todoComponent = () => {
  todos.innerHTML = '';
  getAllTodos().forEach((item) => {
    todos.innerHTML += showToDo(item);
  });
  const remove = document.querySelectorAll('.trash');
  remove.forEach((item) => {
    item.addEventListener('click', () => {
      removeTodo(item.getAttribute('value'));
      todoComponent();
    });
  });

  const desc = document.querySelectorAll('.desc');
  desc.forEach((item) => {
    item.addEventListener('input', () => {
      editTodo(item.getAttribute('data-index'), item.innerHTML);
    });
  });

  const checkbox = document.querySelectorAll('.check');
  checkbox.forEach((item) => {
    item.addEventListener('change', () => {
      isCompleted(item.value);
    });
  });
};

todoComponent();

const desForm = document.querySelector('.todo-form');
desForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(desForm.elements.description.value);
  desForm.reset();
  todoComponent();
});

const clearCompleted = document.querySelector('.clear');
clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  clearAllCompleted();
  todoComponent();
});
