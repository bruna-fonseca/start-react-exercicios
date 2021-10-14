import React from 'react';

const TEXT_STYLES = {
  textAlign: 'center',
};

export default function Carta({ remetente, destino }) {
  return (
    <div style={ TEXT_STYLES } >
      <h1>Olá, {remetente} - {destino} </h1>
      <p>Estou escrevendo eesa carta por causa da atividade que os alunos
        vão fazer, okay. Não desiste, continue fazendo as atividades, treinando e
        praticando. O céu é o limite!.
      </p>
    </div>
  );
};
