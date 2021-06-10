import React from 'react'//Importar siempre react
import '../utils/css/Cuerpo.css'
import rio from '../utils/images/paisaje.jpg'

const Cuerpo = () => {
    return(
        <div className='Container_Cuerpo'>
            <div className="ContainerText">
                <h1>Cascada</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat, dicta alias natus accusamus similique nemo corporis? Velit, illum sunt, sed quaerat odio corrupti dolores doloribus aspernatur enim.</p>
            </div>
            <div className="ContainerImage">
                <img src={rio} alt="Hola, Soy Maria Paula" />
            </div>
        </div>
    )
}
export default Cuerpo