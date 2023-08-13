import React from 'react'
import '../styles/css/Momoji.css'
import killJoy from '../assets/Killjoy.png'
import brim from '../assets/Brimstone.png'
import youru from '../assets/Yoru.png'
import raze from '../assets/Raze.png'
import reyna from '../assets/Reyna.png'


const Momojis = () => {
  return (
    <div className='div-momojis'>
        <img className='killjoy' src={ killJoy } alt="KillJoy" />
        <img className='brim' src={ brim } alt="Brim" />
        <img className='youru' src={ youru } alt="Youru" />
        <img className='raze' src={ raze } alt="Raze" />
        <img className='reyna' src={ reyna } alt="Reyna" />
    </div>
  )
}

export default Momojis