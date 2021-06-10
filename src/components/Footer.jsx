import React from 'react'//Importar siempre react
import '../utils/css/Footer.css'
import arbol from '../utils/images/paisajex2.jpg'

const Footer = () => {
    return(
        <div className="Container_Footer">
             <div className="ContainerText">
                <h1>Árbol</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat, dicta alias natus accusamus similique nemo corporis? Velit, illum sunt, sed quaerat odio corrupti dolores doloribus aspernatur enim.</p>
            </div>
            <div className="ContainerImage">
                <img src={arbol} alt="Hola, Soy Maria Paula" />
            </div>
        </div>
    )
}
export default Footer