import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import AuthUsers from "../Components/AuthUsers";
import { useNavigate } from "react-router-dom";

import Imagenes from "../Images/Imagenes";
import '../Styles/Login.css';

export default function Login (){
    //Estado para mensage emergente
    let [message, setmessage] = useState("");

    //Asignacion de variable para accion ruta del boton
    const navigate = useNavigate();

    //Hook para campos de texto y llamado varible de axios
    const {http } = AuthUsers();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [list, setList] = useState([]);


    //Validacion de campos de texto para email y password
    function validar(){
        let campoEmail = document.getElementById("email").value;
        let campopwd = document.getElementById("pwd").value;
        if(campoEmail.length === 0 || campopwd.length === 0){
            return false
        }return true;
    }

    //Funcion para eventos de boton
    const sumitFrom = () =>{
        //api call
        http.post('/',{email:email,password:password}).then((res)=>{  
            if(res.data.success === true){
                console.log(res.data);
                console.log(res.data.success); 
                setList(res.data.data);
                navigate('/Admin');
                console.warn(list.nombre);
            }else if( validar() === false){
                setmessage("Debe rellenar todos los campos"); 
                console.log("Debe rellenar todos los campos");
            }else{
                setmessage("Contraseña o correo incorrecto"); 
                console.log("Contraseña o correo incorrecto");
            }
        }).catch(
            (err)=>{
                console.log(err);
            }
        )
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
        <button onClick={() => {sumitFrom()}} className="button button--login" >INGRESAR</button>
        <br/>
        <NavLink to="/RecoveryPassword">¿Olvido su contraseña?</NavLink>
        <br/>
        <div className="Emergente" id="idemergente">{message}</div>
        </div>   
    )

}