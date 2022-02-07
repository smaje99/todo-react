import { VscGithub } from "react-icons/vsc";

import '../styles/Github.css';

export const Github = () => {
    return (
        <div className="github-container">
            <a
                href="https://github.com/smaje99/todo-react"
                className="github-link"
                target="_blank"
                rel="noreferrer"
            >
                <VscGithub />
            </a>
        </div>
    )
}