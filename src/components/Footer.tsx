import React from 'react'
import '../styles/css/Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='div-footer'>
            <div className='container-footer'>
                <div className='div-title'>
                    <div className='marcador'></div>
                    <h1>Bill Gates</h1>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</p>
            </div>
            <div className='container-footer'>
                <div className='div-title'>
                    <div className='marcador'></div>
                    <h1>Steve Jobs</h1>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</p>
            </div>
        </div>
        <p className='assinatura'>Feito por Gustavo Ranieli Lemes</p>
    </div>
  )
}

export default Footer