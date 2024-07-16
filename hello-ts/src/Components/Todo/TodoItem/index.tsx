import React from "react";

interface TodoItemProps {
    title?: String,
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    return (
        <li>{props.title}</li>
    );
}

export default TodoItem;