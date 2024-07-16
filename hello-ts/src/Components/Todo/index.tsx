import React from 'react'
import TodoItem from './TodoItem';

interface ITodoItems {
    id: number,
    title: string,
}

interface TodoProps {
    items: ITodoItems[],
}

const Todo: React.FC<TodoProps> = (props) => {
    return (
        <div>
            <ol>
                {
                    props.items.map(item => <TodoItem key={item.id} title={item.title} />)
                }
            </ol>
        </div>
    );
}

export default Todo;