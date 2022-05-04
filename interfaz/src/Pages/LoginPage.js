import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../Context/AuthProvider"

import Imagenes from "../Images/Imagenes";
import '../Styles/Login.css';

import axios from "../Api/axios";

export default function Login() {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSumit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('/login',{email:user,password:pwd},
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-type' : 'application/json'},
                    withCredentials: true
                }) 

            if(response.data.success === true){
                localStorage.setItem("userData", JSON.stringify(response.data.data))
                console.log(response.data);  
                setAuth({user, pwd})
                setUser('');
                setPwd('');
                setSucess(true);
                navigate('/Admin');
            }else{
                setErrMsg('Contraseña o correo incorrectos'); 
            }

        }catch(err){
            console.log(err);
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Eres bienvenido</h1>
                    <br />
                    <a href="/" >Go to home</a>
                </section>
            ) : (
                
                <section className="contenedor" >

                    <div className="Linea" ></div>
                    <h1 className="textInicio" >INCIO DE SESION</h1>
                    <div className="Linea Linea--Abajo" ></div>


                    <form onSubmit={handleSumit}>
                        <div className="campoUser">
                            <div className='Icon_user'>   <img src={Imagenes.IconUser} alt="Icono de usuario" />  </div>
                            <input type="email"
                                id="username"
                                className="Campotext"
                                placeholder="Escriba su email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>

                        <div className="campoUser campoUser--config">
                            <div className='Icon_user'>   <img src={Imagenes.IconClave } alt="Icono de clave"  />  </div>
                            <input type="password"
                                id="password"
                                className=" Campotext"
                                placeholder="Escriba su contraseña"
                                ref={userRef}
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>

                        <button className="button button--login" >INGRESAR</button>
                        <p>
                            <span className="line">
                                { }
                                <NavLink to="/RecoveryPassword">¿Olvido su contraseña?</NavLink>
                            </span>
                        </p>
                        <br/>
                        <div className="Emergente" id="idemergente">{errMsg}</div>               
                    </form>
                </section>
            )}
        </>
    )

}