import React, { useState } from 'react';
import './App.css';
import Block from './components/block/block';

function App() {

  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');

  const checkForWin = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] == state[c]) return true;
    }

    return false;
  }

  const handleOnClickListner = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;

    const win = checkForWin(stateCopy);
    if (win) {
      alert(`${currentTurn} won the game`);
    }
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    setState(stateCopy);
  }

  return (
    <div className="container">
      <div className='board'>
        <div className="row">
          <Block value={state[0]} onClick={() => handleOnClickListner(0)} />
          <Block value={state[1]} onClick={() => handleOnClickListner(1)} />
          <Block value={state[2]} onClick={() => handleOnClickListner(2)} />
        </div>
        <div className="row">
          <Block value={state[3]} onClick={() => handleOnClickListner(3)} />
          <Block value={state[4]} onClick={() => handleOnClickListner(4)} />
          <Block value={state[5]} onClick={() => handleOnClickListner(5)} />
        </div>
        <div className="row">
          <Block value={state[6]} onClick={() => handleOnClickListner(6)} />
          <Block value={state[7]} onClick={() => handleOnClickListner(7)} />
          <Block value={state[8]} onClick={() => handleOnClickListner(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
