import React from 'react';

import Button from '../../components/Button';

// import { Container } from './styles';

export default function Home() {
  return (
    <div className="main">
      <div className="cardPrimary">

        <h2>Pergunta:</h2>
        <h3 className="pergunta">Quem é o mais chato?</h3>

        <Button title={'Ele'} classeEspecifica={'colorE'}/>
        <Button title={'Ela'} classeEspecifica={'colorA'}/>
        <br></br>
        <Button title={'Próximo'} classeEspecifica={'colorP'}/>

        <div className="banner">
          <h3>Teste</h3>
        </div>
      </div>
      
      
    </div>
  );
}
