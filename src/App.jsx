import React, { useState, useRef } from 'react'
import {v4 as uuid } from 'uuid/v4'

import { TodoList } from './components/TodoList'

export function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Tarea 1', completed: false }
    ]);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        task !== '' && setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid(), task, completed: false }]
        });
        todoTaskRef.current.value = null;
    };

    return (
        <>
            <TodoList todos={todos} />
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick={}>🗑</button>
        </>
    );
}