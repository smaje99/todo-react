import React from 'react'

import { TodoList } from './TodoList'

import '../styles/Todo.css'

export function Todo({ todos, toggleTodo, todoTaskRef, onEnterPress }) {
    return (
        <section className="todo">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input
                className="todo__input"
                ref={todoTaskRef}
                type="text"
                placeholder="Nueva Tarea"
                onKeyPress={onEnterPress}
            />
        </section>
    );
}