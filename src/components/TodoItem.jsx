import React from 'react';

import '../styles/TodoItem.css'

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo

    const handleTodoClick = () => toggleTodo(id);

    return(
        <li>
            <label className="item">
                <input
                    type="checkbox"
                    id={id}
                    className="item__checked"
                    checked={completed}
                    onChange={handleTodoClick}
                />
                <span for={id} className="item__task">{task}</span>
            </label>
        </li>
    );
}