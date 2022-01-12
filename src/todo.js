let todos = [];

export const addTodo = (description) => {
  const index = todos.length + 1;
  const completed = false;
  todos.push({ description, completed, index });
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const adjustIndex = () => {
  let n = 0;
  todos.forEach((item) => {
    n += 1;
    item.index = n;
  });
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
  const todo = todos.find((item) => (
    Number(index) === item.index
  ));
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const clearAllCompleted = () => {
  const uncompleted = todos.filter((item) => (
    item.completed !== true
  ));
  adjustIndex();
  localStorage.setItem('todos', JSON.stringify(uncompleted));
};

export const isCompleted = (index) => {
  const todo = todos.find((item) => Number(index) === item.index);
  if (todo.completed === true) {
    todo.completed = false;
  } else {
    todo.completed = true;
  }
  localStorage.setItem('todos', JSON.stringify(todos));
};
