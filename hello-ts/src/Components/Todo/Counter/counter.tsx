import React, { useState } from 'react'
import './style.css'

const Counter: React.FC = (props) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    }

    return (
        <div className="counterContainer">
            <h1 id='counterValue'>{count}</h1>
            <button id='incre' onClick={handleIncrement}>Incre</button>
            <button id="decre" onClick={handleDecrement}>Decre</button>
        </div>
    );
}

export default Counter;