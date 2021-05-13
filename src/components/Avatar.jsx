import React from 'react';

import '../styles/Avatar.css'

export function Avatar() {
    return (
        <aside className="avatar">
            <img className="avatar__image" src="images/avatars.svg" alt="avatar" />
            <div className="avatar__balloon">
                <span className="avatar__balloon__message">
                    ¿Qué hay para hacer hoy?
                </span>
            </div>
        </aside>
    )
}