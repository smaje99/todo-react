import React, { useState, useRef, useEffect } from 'react'

import uuid from 'react-uuid'

import { TodoList } from './components/TodoList'

const KEY = 'todoApp.todos'

export function App() {
    const [todos, setTodos] = useState([
        { id: uuid(), task: 'Tarea 1', completed: false }
    ]);

    const [left, setLeft] = useState(0)

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        storedTodos && setTodos(storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        setLeft(todos.filter((todo) => !todo.completed).length)
    }, [todos])

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        task !== '' && setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid(), task, completed: false }]
        });
        todoTaskRef.current.value = null;
    };

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick={handleClearAll}>🗑</button>
            <div>
                <p>Te quedan {left} tareas por terminar</p>
            </div>
        </>
    );
}