let todos = [];

export const addTodo = (description) => {
  const index = todos.length + 1;
  const completed = false;
  todos.push({ description, completed, index });
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const removeTodo = (index) => {
  todos = todos.filter((item) => (
    Number(index) !== item.index
  ));
  adjustIndex();
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getAllTodos = () => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

export const editTodo = (index, description) => {
  let todo = todos.find((item) => (
    Number(index) === item.index
  ));
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const adjustIndex = () => {
  let n = 0;
  todos.forEach((item) => {
    n++;
    item.index = n;
  });
};
