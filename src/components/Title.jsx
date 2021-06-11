import React from 'react'//Importar siempre react
import '../utils/css/Title.css'
import {Link} from 'react-router-dom'
function Title (){
    return(
        <div className="Container_title">
         <h1 id="principalTitle"> PAISAJES </h1>
         <Link to="/contact">
           <button> Me voy para Contact </button>
         </Link>
           <Link to="/">
           <button> Me voy para Home </button>
         </Link>
       </div>
    )
}
export default Title