import React from 'react';
import './style.css';

const Ladybug = ({ state }) => {
  return (
    <div
      className={`ladybug ladybug--${state.orientation}`}
      style={{
        top: `${state.posX}px`,
        left: `${state.posY}px`,
      }}
    />
  );
};

export default Ladybug;
