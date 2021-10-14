import React, { useState } from 'react';

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const SUM_BUTTON = {
  backgroundColor: 'green',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '10px',
  padding: '10px'
};

const SUB_BUTTON = {
  backgroundColor: 'blue',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '10px',
  padding: '10px'
};

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={ CONTAINER_STYLES }>
      <div>
        <h2>Contador - {contador}</h2>
      </div>
      <div>
        <button onClick={ () => setContador(contador + 5)} style={ SUM_BUTTON } type="button">Somar</button>
        <button onClick={ () => setContador(contador - 3)}  style={ SUB_BUTTON } type="button">Subtrair</button>
      </div>
    </div>
  );
};
