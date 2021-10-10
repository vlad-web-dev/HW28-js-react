import React from "react";
import Task from "./Task";

function todoItems({todos, onDelete, onChangeStatus}) {
    const items = todos.map((todo, idx) =>
        <Task key={idx} todo={todo} onChangeStatus={onChangeStatus} onDelete={onDelete}/>
    );
    return <ul>{items}</ul>
}

export default todoItems
