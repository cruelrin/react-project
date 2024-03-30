import React from 'react';

export function Todo() {
  return (
    <div>
      <input type="checkbox" /> {/* Флажок для статуса задачи */}
      <input type="text" /> {/* Поле для редактирования текста задачи */}
      <button>Save</button> {/* Кнопка для сохранения изменений */}
      <button>Delete</button> {/* Кнопка для удаления задачи */}
    </div>
  );
}
