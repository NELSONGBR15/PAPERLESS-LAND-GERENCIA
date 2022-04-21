import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Imagenes from "../Images/Imagenes";
import '../Styles/ColumnUsers.css'

export default function ColumnUsers(){

    const Nombre = "Nelson FABIAN BOCANEGRA RIVERA"

    const navigate = useNavigate();
    const handleClick = ( ) =>{navigate("/")}

    const fecha = new Date();
    const FechaActual = fecha.toLocaleDateString();
    const Hora = new Date();
    const HoraActual = Hora.getHours()+ ":"+ Hora.getMinutes() + ":" +  Hora.getSeconds();

    return(
        <div className="ColumnUsers">            
            <div className='logo_user'>   <img src={Imagenes.ImgUser } alt="Icono de usuario"  /> </div>                
            <div  className="Nombre"> {Nombre} </div>
            <div className="Cargo">Cargo: Administrador</div>
            <div className="Line"></div>
            <div className="Botones">
                <button className="Button Button--inicio">INICIO</button> 
                <button className="Button Button--registro ">REGISTROS</button> 
                <button className="Button Button--user " onClick={<Link  to={'/'}  className="Button"  ></Link>} >USUARIOS</button> 
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