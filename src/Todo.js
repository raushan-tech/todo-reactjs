import React  from 'react';

function Todo({ todo, index, completeTodo, removeTodos }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.todolist}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodos(todo._id)}>permanent deleate</button>
        </div>
      </div>
    );
  }
export default Todo;