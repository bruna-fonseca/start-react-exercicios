import React, { useState } from 'react';


function App() {

  const [contador, setContador] = useState(0);
  
  return (
    <div>
        <h1>Contador</h1>
        <h3>Você clicou {contador} vezes!</h3>
        <button onClick={ () => setContador(contador - 1) } type="button">Decremento</button>
        <button onClick={ () => setContador(contador + 1) } type="button">Incremento</button>
    </div>
  );
}

export default App;
