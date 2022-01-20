import './style.css';
import Todo from './todo';
import { cardComponent, todoComponent } from './main';

const todo = new Todo();

const main = document.querySelector('main');
main.innerHTML = cardComponent();

todoComponent();

export const desForm = document.querySelector('.todo-form');
desForm.addEventListener('submit', (e) => {
  e.preventDefault();
  todo.addTodo(desForm.elements.description.value);
  desForm.reset();
  todoComponent();
});

export const clearCompleted = document.querySelector('.clear');
clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  todo.clearAllCompleted();
  todoComponent();
});
