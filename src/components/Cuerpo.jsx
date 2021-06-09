import React from 'react'//Importar siempre react
import '../utils/css/Cuerpo.css'
import rio from '../utils/images/paisaje.jpg'

const Cuerpo = () => {
    return(
        <div class='Container_Cuerpo'>
        <p> Hola, este es el cuerpo de la montaña</p>
        <img src={rio}/>
        </div>
    )
}
export default Cuerpo