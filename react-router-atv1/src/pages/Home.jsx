import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <section style={{ margin: '10px' }}>
        <h3 style={{ marginBottom: '20px' }}>Links para outras paginas</h3>
        <Link to="/musica">Musica</Link>
        <br/>
        <Link to="/cidade">Cidade</Link>
      </section>
    </div>
  )
}
