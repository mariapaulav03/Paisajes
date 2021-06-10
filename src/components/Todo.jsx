import React from 'react'//Importar siempre react
import '../utils/css/Todo.css'
import nieve from '../utils/images/nieve.jpg'
const Todo = () => {
    return(
        <div className='Container_Todo'>
            <div className="ContainerText">
                <h1>Nieve</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat, dicta alias natus accusamus similique nemo corporis? Velit, illum sunt, sed quaerat odio corrupti dolores doloribus aspernatur enim.</p>
            </div>
            <div className="ContainerImage">
                <img src={nieve} alt="Hola, Soy Maria Paula" />
            </div>
        </div>
    )
}
export default Todo