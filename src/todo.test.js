import Todo from './todo';
import LocalStorage from './local-storage-mock';

global.localStorage = new LocalStorage();
const todo = new Todo();

describe('Add todo test', () => {
  test('adding todo', () => {
    todo.addTodo('test-1');
    expect(todo.todos.length).toBe(1);
  });

  test('check description', () => {
    todo.addTodo('test-2');
    expect(todo.todos[1].description).toBe('test-2');
  });
  test('check description', () => {
    todo.addTodo('test-3');
    expect(todo.todos.length).toBe(3);
  });
});

describe('remove todo test', () => {
  it('should remove todo', () => {
    const index = 1;
    todo.removeTodo(index);
    expect(todo.todos.length).toBe(2);
  });
});

describe('remove all completed task', () => {
  it('should clear all completed tasks', () => {
    todo.clearAllCompleted();
    expect(todo.todos.length).toBe(2);
  });
});

describe('edit todo', () => {
  const index = 1;
  it('should change todo description from test-2 to hello', () => {
    todo.editTodo(index, 'hello');
    expect(todo.todos.map((item) => {
      if (item.index === index) {
        return item.description;
      }
    }).join('')).toBe('hello');
  });
  it('should toggle status from false to true', () => {
    const index = 1;
    todo.isCompleted(index);
    expect(todo.todos.map((item) => {
      if (item.index === index) {
        return item.completed;
      }
    }).join('')).toBeTruthy();
  });
  it('should toggle status from true to false', () => {
    const index = 1;
    todo.isCompleted(index);
    expect(todo.todos.map((item) => {
      if (item.index === Number(index)) {
        return item.completed;
      }
    }).join('')).toMatch('false');
  });
});
