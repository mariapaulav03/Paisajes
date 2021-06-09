import React from 'react'//Importar siempre react
import '../utils/css/Footer.css'
import arbol from '../utils/images/paisajex2.jpg'

const Footer = () => {
    return(
        <div class='Container_Footer'>
            <p>Hola, este es el componente Footer que se ve desde el rio</p>
            <img src={arbol}/>
        </div>
    )
}
export default Footer