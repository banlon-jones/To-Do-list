import Todo from './todo';

const todo = new Todo();

export const showToDo = (todo) => `<li class="item">
                    <input class="check" type="checkbox" value="${todo.index}"/>
                     <span class="desc" data-index="${todo.index}" contentEditable="true"> ${todo.description} </span>
                    <button class="trash" value="${todo.index}">
                       <i class="fa fa-trash"></i>
                    </button>
                </li><hr/>`;

export const cardComponent = () => `<section class="card">
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
const todos = document.querySelector('.todos');
export const todoComponent = () => {
  todos.innerHTML = '';
  todo.getAllTodos().forEach((item) => {
    todos.innerHTML += showToDo(item);
  });
  const remove = document.querySelectorAll('.trash');
  remove.forEach((item) => {
    item.addEventListener('click', () => {
      todo.removeTodo(item.getAttribute('value'));
      todoComponent();
    });
  });

  const desc = document.querySelectorAll('.desc');
  desc.forEach((item) => {
    item.addEventListener('input', () => {
      todo.editTodo(item.getAttribute('data-index'), item.innerHTML);
    });
  });

  const checkbox = document.querySelectorAll('.check');
  checkbox.forEach((item) => {
    item.addEventListener('change', () => {
      todo.isCompleted(item.value);
    });
  });
};
