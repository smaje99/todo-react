import React from 'react';

export function Avatar() {
    return (
        <aside className="avatar">
            <img src="images/avatar.svg" alt="avatar" />
            <div className="avatar__message">
                <p>
                    ¿Qué hay para hacer hoy?
                </p>
            </div>
        </aside>
    )
}