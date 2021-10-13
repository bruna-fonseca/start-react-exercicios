import React from 'react';

const DIV_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
};

function App() {
  return (
    <div style={ DIV_STYLES } className="App">
     <h1>Aprendendo React</h1>
     <div>
      <img alt="coruja" src="https://www.iguiecologia.com/wp-content/uploads/2021/02/Coruja-buraqueira7-2.jpg" />
     </div>
     <pre>
     Por influência da mitologia grega tanto que Atena, deusa da guerra e da sabedoria,
     tinha uma coruja como mascote.<br/>
     Os gregos consideravam a noite como o momento do pensamento filosófico e da 
     revelação intelectual e a coruja, por ser uma ave noturna, acabou<br/>
     representando essa busca pelo saber. 
     </pre>
    </div>
  );
}

export default App;
