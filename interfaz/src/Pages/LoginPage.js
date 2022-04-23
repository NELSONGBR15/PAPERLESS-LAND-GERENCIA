import { NavLink } from "react-router-dom";
import { useState } from "react";

import Imagenes from "../Images/Imagenes";
import '../Styles/Login.css';

export default function Login (){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const sumitFrom = () =>{
        //api call
    }

    return(
        <div className="contenedor">
        <div className="Linea" ></div>
        <h1 className="textInicio" >INCIO DE SESION</h1>
        <div className="Linea Linea--Abajo" ></div>
        <div className="campoUser">
            <div className='Icon_user'>   <img src={Imagenes.IconUser } alt="Icono de usuario"  />  </div>
            <input 
                id="email"  
                type="email"
                className="Campotext" 
                placeholder="Escriba su email"
                onChange={e=>setEmail(e.target.value)}
            />           
            </div>
        <br/>
        <div className="campoUser campoUser--config">
        <div className='Icon_user'>   <img src={Imagenes.IconClave } alt="Icono de clave"  />  </div>
            <input 
                id="pwd"
                type={"password"}
                className=" Campotext"
                placeholder="Escriba su contraseña"
                onChange={e => setPassword(e.target.value)}
            />
            </div>
        <br/>
        <button to='/Admin' onClick={sumitFrom} className="button" >INGRESAR</button>
        <br/>
        <NavLink to="/RecoveryPassword">¿Olvido su contraseña?</NavLink>
        </div>   
    )
}