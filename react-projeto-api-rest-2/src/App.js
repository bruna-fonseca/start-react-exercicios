import { useState } from 'react';
import Axios from 'axios';

import InfoCard from './InfoCard';
import './App.css';

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px',
};

const TITLE_STYLES = {
  color : '#5B98D7',
  margin : '20px',
};

const INPUT_STYLE = {
  height: '40px',
  width: '300px',
  padding: '20px',
  border: 'none',
  backgroundColor: '#E9E9E9',
};

const BUTTON_STYLES = {
  backgroundColor: '#5B98D7',
  color: 'white',
  border: 'none',
  padding: '20px',
  margin: '15px',
  borderRadius: '30px',
  cursor: 'pointer',
}

function App() {
  const [cep, setCep] = useState();
  const [data, setData] = useState();

  const handleClick = () => {
    Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => setData(res.data))
      .catch(error => console.log(error));
  };

  return (
    <div >
      <div style={ CONTAINER_STYLES } >
        <h1 style={ TITLE_STYLES } >Consultar CEP</h1>
        <div>
          <input style={ INPUT_STYLE } onChange={ ({ target }) => setCep(target.value)} type="text" placeholder="ex 46400-000" />
          <button style={ BUTTON_STYLES } onClick={ handleClick } >Consultar</button>
        </div>
      </div>
      <InfoCard data={ data } />
    </div>
  );
}

export default App;
