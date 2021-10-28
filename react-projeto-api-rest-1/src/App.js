import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './App.css';

const PERSON_STYLES = {
  display: 'block',
  margin: '10px',
};

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '0 auto',
};

const IMG_STYLES = {
  display: 'block',
  borderRadius: '20px',
  width: '200px',
  margin: '20px',
}


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=10')
      .then((res) => setData(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div >
      <h1 style={{ textAlign: 'center', marginTop: '30px' }} >Pessoas cadastradas</h1>
      <div style={ CONTAINER_STYLES } >
        {data && data.map((person, index) => (
          <div style={ PERSON_STYLES } key={index}>
            <img style={ IMG_STYLES } src={ person.picture.medium } alt="imagem de pessoa cadastrada"/>
            <span>{person.name.first}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
