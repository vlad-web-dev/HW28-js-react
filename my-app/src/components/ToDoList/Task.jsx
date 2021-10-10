import React from "react";

export default function Task({ todo, onChangeStatus, onDelete}) {
    return <li className="todo-list">
        <div className="list-item-view">
            <label className={todo.completed ? 'completed': undefined} onDoubleClick={() => onChangeStatus(todo)}>
                <input type="checkbox" className={'checkbox-completed-task' + todo.completed && 'checked'}/>{todo.title}
            </label>
            <button className="btn btn-danger delete-task" onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    </li>
}