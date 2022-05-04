import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import Imagenes from "../Images/Imagenes";
import '../Styles/ColumnUsers.css'

export default function ColumnUsers(){
    const user = JSON.parse(localStorage.getItem("userData"));
    const [nombres, setNombres] = useState();

    const Nombre_completo = user.nombre + ' ' + user.apellido;    
    //Ruta de accion de boton
    const navigate = useNavigate();
    const handleClick = ( ) =>{
        navigate("/")
        localStorage.clear();
        setNombres();
        }

    const ClickInicio = () => { navigate("/Admin") };     
    const ClickRegistro = () => { navigate("/Admin/Registros") }; 
    const ClickUsuarios = () => { navigate("/Admin/Usuarios") };    

    //Variables para obtencion de Hora y fecha del sustema
    const fecha = new Date();
    const FechaActual = fecha.toLocaleDateString();
    const Hora = new Date();
    const HoraActual = Hora.getHours()+ ":"+ Hora.getMinutes() + ":" +  Hora.getSeconds();

    return(
        <div className="ColumnUsers">            
            <div className='logo_user'>   <img src={Imagenes.ImgUser } alt="Icono de usuario"  /> </div>                
            <div  className="Nombre"> {Nombre_completo.toUpperCase()} </div>
            <div className="Cargo">Cargo: Administrador</div>
            <div className="Line"></div>
            <div className="Botones">
                <button className="Button Button--inicio" onClick={ClickInicio}>INICIO</button> 
                <button className="Button Button--registro " onClick={ClickRegistro}>REGISTROS</button> 
                <button className="Button Button--user " onClick={ClickUsuarios} >USUARIOS</button> 
                <button className="Button Button--out " onClick={handleClick}  >SALIR</button>

                <div></div>
            </div>

            <div className="Fecha-Hora"> 
                <div className="Fecha"> Fecha: {FechaActual}  </div>
                <div className="Hora">Hora: {HoraActual}</div>
            </div>
        </div>  
    );
}