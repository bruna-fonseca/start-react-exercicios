import React from 'react'
import { Link } from 'react-router-dom'

const CONTAINER_STYLES = {
  textAlign: 'center',
  margin: '40px',
}

export default function Musica() {
  return (
    <div style={ CONTAINER_STYLES }>
      <h1>Musica Favorita</h1>
      <section>
        <h2 style={{ margin: '30px'}}>Inuyasha - Mahmood</h2>

        <p>veja o clipe <a href="https://www.youtube.com/watch?v=yfkp7bHyVGM">aqui</a></p>
      </section>
      <br/>
      <Link to="/"><button>Voltar para home</button></Link>
    </div>
  )
}
