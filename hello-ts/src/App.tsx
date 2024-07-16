import React from "react";
import Todo from "./Components/Todo";
import { title } from "process";

const TodoItem = [
    {
        id: 1,
        title: 'I need to complete react',
    },
    {
        id: 2,
        title: 'I need to apply for openings',
    },

]
const App: React.FC = () => {
    return (
        <div>
            <Todo items={TodoItem} />
        </div>
    )
}

export default App;