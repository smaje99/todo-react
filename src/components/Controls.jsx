import React from 'react';

import '../styles/Controls.css'

export function Controls({ left, clearAll }) {
    const handleClearAll = () => clearAll();

    return (
        <div className="controls">
            <div className="controls__left">
                <p className="controls__left__text">
                    Te quedan <span className="left">{left}</span> tareas por terminar
                </p>
            </div>
            <button className="controls__clear" onClick={handleClearAll}>
                Limpiar tareas
            </button>
        </div>
    );
}