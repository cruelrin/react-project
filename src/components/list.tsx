
import { Todo } from './todo';

export function List() {
  return (
    <div>
      <h2>Todo List</h2> {/* Заголовок списка задач */}
      <button>Add Task</button> {/* Кнопка для добавления новой задачи */}
      <div>
        {/* Отображение списка задач */}
        <Todo />
        <Todo />
        <Todo />
        {/* Добавьте больше компонентов Todo, если нужно */}
      </div>
    </div>
  );
}
