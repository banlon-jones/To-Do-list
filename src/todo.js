export default class Todo {
  todos = [];

  addTodo = (description) => {
    const index = this.todos.length + 1;
    const completed = false;
    this.todos.push({ description, completed, index });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  adjustIndex = () => {
    let n = 0;
    this.todos.forEach((item) => {
      n += 1;
      item.index = n;
    });
  };

  removeTodo = (index) => {
    this.todos = this.todos.filter((item) => (
      Number(index) !== item.index
    ));
    this.adjustIndex();
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  getAllTodos = () => {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
    return this.todos;
  };

  editTodo = (index, description) => {
    const todo = this.todos.find((item) => (
      Number(index) === item.index
    ));
    todo.description = description;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  clearAllCompleted = () => {
    const uncompleted = this.todos.filter((item) => (
      item.completed !== true
    ));
    this.adjustIndex();
    localStorage.setItem('todos', JSON.stringify(uncompleted));
  };

  isCompleted = (index) => {
    const todo = this.todos.find((item) => Number(index) === item.index);
    if (todo.completed === true) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };
}
