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
});

describe('remove todo test', () => {
  it('should remove todo', () => {
    const index = 1;
    todo.removeTodo(index);
    expect(todo.todos.length).toBe(1);
  });
});
