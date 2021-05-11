import React, { useState, useRef, useEffect } from 'react';

import uuid from 'react-uuid'

import { Todo } from './components/Todo'
import { Avatar } from './components/Avatar'
import { Controls } from './components/Controls'

import './styles/App.css'

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
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        setLeft(todos.filter((todo) => !todo.completed).length)
    }, [todos]);

    useEffect(() => {
        todoTaskRef.current.focus();
    });

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const clearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            const task = todoTaskRef.current.value.trim();
            task !== '' && setTodos((prevTodos) => {
                return [...prevTodos, { id: uuid(), task, completed: false }]
            });
            todoTaskRef.current.value = null;
        }
    }

    return (
        <>
            <Todo
                todos={todos}
                toggleTodo={toggleTodo}
                todoTaskRef={todoTaskRef}
                onEnterPress={onEnterPress}
            />
            <div className="panel">
                <Avatar />
                <Controls left={left} clearAll={clearAll} />
            </div>
        </>
    );
}