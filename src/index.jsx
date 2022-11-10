import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [ladybugState, setLadybugState] = useState({
    posX: 100,
    posY: 100,
    orientation: 'right',
  });

  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      setLadybugState({
        ...ladybugState,
        posX: ladybugState.posX - STEP_SIZE,
        orientation: 'up',
      });
    } else if (code === 'ArrowLeft') {
      setLadybugState({
        ...ladybugState,
        posY: ladybugState.posY - STEP_SIZE,
        orientation: 'left',
      });
    } else if (code === 'ArrowRight') {
      setLadybugState({
        ...ladybugState,
        posY: ladybugState.posY + STEP_SIZE,
        orientation: 'right',
      });
    } else if (code === 'ArrowDown') {
      setLadybugState({
        ...ladybugState,
        posX: ladybugState.posX + STEP_SIZE,
        orientation: 'down',
      });
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      <Ladybug state={ladybugState} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
