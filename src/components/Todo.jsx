import React, { useState, useRef, useEffect } from 'react'

import uuid from 'react-uuid'

import { TodoList } from './TodoList'

import '../styles/Todo.css'

const KEY = 'todoApp.todos'

export function Todo() {
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

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            const task = todoTaskRef.current.value;
            task !== '' && setTodos((prevTodos) => {
                return [...prevTodos, { id: uuid(), task, completed: false }]
            });
            todoTaskRef.current.value = null;
        }
    }

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
            <div className="todo__left">
                <p className="todo__left__text">
                    Te quedan <span className="left">{left}</span> tareas por terminar
                </p>
            </div>
            <button className="todo__clear" onClick={handleClearAll}>
                Limpiar tareas
            </button>
        </section>
    );
}