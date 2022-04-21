import React, {Component} from "react";

import Imagenes from "../Images/Imagenes";
import '../Styles/Login.css';

export default class Login extends Component{

    render(){
        return(
            <div className="contenedor">
            <div className="Linea" ></div>
            <h1 className="textInicio" >INCIO DE SESION</h1>
            <div className="Linea Linea--Abajo" ></div>
            <div className="campoUser">
                <div className='Icon_user'>   <img src={Imagenes.IconUser } alt="Icono de usuario"  />  </div>
                <input className=" Campotext" ></input>           
                </div>
            <br/>
            <div className="campoUser campoUser--config">
            <div className='Icon_user'>   <img src={Imagenes.IconClave } alt="Icono de clave"  />  </div>
                <input  type={"password"} className=" Campotext" ></input>
                </div>
            <br/>

            <a href='#' className="button" >INGRESAR</a>
            <br/>
            <a href="#">¿Olvido su contraseña?</a>
            </div>   
        )
    }
}