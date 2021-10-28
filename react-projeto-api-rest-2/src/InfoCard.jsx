import React from 'react';

const DIV_STYLES = {
  backgroundColor: '#E9E9E9',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100px',
  margin: '0 auto',

  color: '#5B98D7',
};

const INFO_CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #5B98D7',
  margin: '0 auto',


  width: '50%',
  height: '300px',
};

export default function InfoCard({ data }) {
  return (
    <section >
      {data ? (
        <div>
          <div style={ DIV_STYLES } >
            <h1>{data.cep}</h1>
            <p>{`${data.localidade} - ${data.uf}`}</p>
          </div>
          <div style={ INFO_CONTAINER_STYLES } >
            <p>Rua: {data.logradouro}</p>
            <p>CEP: {data.cep}</p>
            <p>Bairro: {data.bairro}</p>
            <p>Cidade: {data.localidade}</p>
            <p>Estado: {data.uf}</p>
            <p>DDD: {data.ddd}</p>
          </div>
      </div> 
      ) : null}
    </section>
  );
};
