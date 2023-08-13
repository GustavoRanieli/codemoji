import React, { ReactNode } from 'react'
import '../styles/css/Text.css'

interface MyComponent{
  children: ReactNode
}

const Text = () => {
  return (
    <div className='div-textbody'>
      <p>Apple</p>
      <h1>
          Melhor site para <br />
          criar memoji.<br />
          Fácil, simples e rápido
      </h1>
      <div className='divs-buttonsbody'>
        <button className='bt-roxo'>CRIAR MEMOJI</button>
        <button className='bt-normal'>VER BIBLIOTECA</button>
      </div>
    </div>
  )
}

export default Text