import React from 'react'
import { Link } from 'react-router-dom'

const CONTAINER_STYLES = {
  textAlign: 'center'
}

export default function Cidade() {
  return (
    <div style={ CONTAINER_STYLES }>
      <h1 style={{ margin: '20px' }}>Cidade que gostaria de visitar</h1>
      <h4>Seul - Coreia do sul</h4>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f2/f0/caption.jpg?w=700&h=-1&s=1"
        alt="foto de cidade de seul"/>
      <br/>
      <Link to="/"><button>Voltar para home</button></Link>
    </div>
  )
}
