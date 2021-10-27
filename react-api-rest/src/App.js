import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const CONTAINER_STYLES = {
  textAlign: 'center',
  margin: '0 auto',
};

function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    axios.get('https://api.github.com/users/bruna-fonseca')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={ CONTAINER_STYLES } >
      {info ? (
        <div>
          <h1>{info.login}</h1>
          <p>{info.bio}</p>
          <img src={info.avatar_url} alt="foto do perfil no github" />
        </div>
      ) : null}
    </div>
  );
};

export default App;
