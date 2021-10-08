import React from "react";

function todoItems({todos, onDelete, onChangeStatus}) {
    const items = todos.map((todo, index) =>
        <li className="todo-list" key={index}>
            <div className="list-item-view">
                {/*onClick почему-то адваивает запросы, хотел бы узнать причину, давненько не писал на реакте
                <label className={todo.completed ? 'completed': undefined} onClick={() => onChangeStatus(todo)}>
                */}
                <label className={todo.completed ? 'completed': undefined} onDoubleClick={() => onChangeStatus(todo)}>
                    <input type="checkbox" className={'checkbox-completed-task' + todo.completed && 'checked'}/>{todo.title}
                </label>
                <button className="btn btn-danger delete-task" onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </li>
    );
    return <ul>{items}</ul>
}

export default todoItems
